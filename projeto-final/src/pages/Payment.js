import styles from "./Payment.module.css"
import cartList from '../json/cart';
import Button from '../components/Button'

import { useNavigate } from 'react-router-dom';

function Payment(){
    let total = 0;
    cartList.map(product => {
        total += product.qnt * product.price;
    });

    const navigate = useNavigate();
    const cancel = () => {
        navigate('/confirm');
    }
    const ahead = () => {
        navigate('/');
    }

    return(
        <div>
            <h1 className={styles.title}>Selecione o Método de Pagamento:</h1>
            <div className={styles.box}>
                
            </div>
            <div className={styles.navegation}>
                <Button text="Voltar" event={cancel}></Button>
                <Button text="Avançar" event={ahead}></Button>
            </div>
        </div>

        
    );
};

export default Payment