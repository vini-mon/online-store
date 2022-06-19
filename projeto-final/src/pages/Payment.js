import styles from "./Payment.module.css"
import cartList from '../json/cart';
import Button from '../components/Button'

import { useNavigate } from 'react-router-dom';

function Payment(){
    let total = 0;
    cartList.map(product => {
        total += product.qnt * product.price;
    });

    const pay = () => {
        console.log("pay");
    }
    const attSupplies = () => {
        console.log("att")
    }

    const navigate = useNavigate();
    const cancel = () => {
        navigate('/confirm');
    }
    const ahead = () => {
        attSupplies();
        navigate('/');
    }


    return(
        <div>
            <h1 className={styles.title}>Finalize seu Pedido</h1>
            <div className={styles.box}>
                <h3>Selecione o Detalhes de Pagamento:</h3>
                <form onSubmit={pay}>
                    <div className={styles.form}>
                        <label>Informações do Cliente:</label>
                        <input type="text" placeholder="Número do Cartão"/>
                        <input type="text" placeholder="Email"/>
                        <input type="text" placeholder="CPF"/>
                        <label>Informações do Cartão:</label>
                        <input type="text" placeholder="Nome do Titular"/>
                        <input type="text" placeholder="Código de Segurança"/>
                        <input type="text" placeholder="Data de Validade"/>
                    </div>
                        
                </form>
            </div>
            <div className={styles.navegation}>
                <Button text="Voltar" event={cancel}></Button>
                <Button text="Finalizar" event={ahead}></Button>
            </div>
        </div>

        
    );
};

export default Payment