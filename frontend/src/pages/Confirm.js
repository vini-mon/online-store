import styles from "./Confirm.module.css";
import cartList from '../json/cart';

import { useNavigate } from 'react-router-dom';

function Confirm(){

    let total = 0;

    cartList.map(product => {

        total += product.qnt * product.price;
        return null;

    });

    const navigate = useNavigate();

    const cancel = () => {
        navigate('/cart');
    }

    const ahead = () => {
        navigate('/payment');
    }

    function remove(id){

        console.log("remove product: ", id);

    }

    return(

        <div>

            <h1 className={styles.title}>Finalize seu Pedido</h1>

            <div className={styles.box}>

                <h3>Confira seu Pedido:</h3>

                {cartList.map((cart) => (

                    <div className={styles.paymentBox} key={cart.id}>

                        <span className={styles.product}>{cart.qnt}x {cart.name} R${cart.price * cart.qnt}</span>
                        <i onClick={() => remove(1)} className={styles.editIcon}><i className="fas fa-edit"></i></i>&nbsp;

                    </div>                         
                ))}

                <p>Total: R${total}</p>

            </div>

            <div className={styles.navegation}>

                <button className={styles.btn} text="Voltar" onClick={cancel}>Voltar</button>
                <button className={styles.btn} text="Avançar" onClick={ahead}>Confirmar</button>

            </div>

        </div>
        
    );
};

export default Confirm