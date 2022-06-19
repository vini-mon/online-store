import styles from "./Confirm.module.css"
import cartList from '../json/cart';
import Button from '../components/Button'

import { useNavigate } from 'react-router-dom';

function Confirm(){
    let total = 0;
    cartList.map(product => {
        total += product.qnt * product.price;
    });

    const navigate = useNavigate();
    const cancel = () => {
        navigate('/cart');
    }
    const ahead = () => {
        navigate('/payment');
    }

    return(
        <div>
            <h1 className={styles.title}>Finalize seu Pedido</h1>
            <div className={styles.box}>
                <h3>Confira seu Pedido:</h3>
                {cartList.map((cart) => (
                    <div className={styles.paymentBox} key={cart.id}>
                        <p>{cart.qnt}x {cart.name} R${cart.price * cart.qnt}</p>
                        <button className={styles.btn}>X</button>
                    </div>                         
                ))}
                <p>Total: R${total}</p>
            </div>
            <div className={styles.navegation}>
                <Button text="Voltar" event={cancel}></Button>
                <Button text="Avançar" event={ahead}></Button>
            </div>
        </div>

        
    );
};

export default Confirm