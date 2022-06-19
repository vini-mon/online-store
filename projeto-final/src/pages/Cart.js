import styles from './Cart.module.css';
import cartList from '../json/cart';
import Button from '../components/Button'
import CartProduct from '../components/CartProduct'

import { useNavigate } from 'react-router-dom';

function Cart() {
    let total = 0;
    cartList.map(product => {
        total += product.qnt * product.price;
    });

    const navigate = useNavigate();
    const payment = () => {
        navigate('/payment');
    }

    const handleAdd = (product) => {
        console.log("add");
    }

    const handleRemove = (product) => {
        console.log("remove");
    }

    return(
        <div>
        <h1 className={styles.title}>Carrinho</h1>
            <div className={styles.box}>
                {cartList.map((cart) => (
                    <CartProduct
                        name={cart.name} 
                        description={cart.description}
                        price={cart.price} 
                        qnt = {cart.qnt}
                        source={cart.img} 
                        key={cart.id} 
                        eventAdd={handleAdd}
                        eventRemove={handleRemove}
                    />                           
                ))}
                <div className={styles.end}>
                    <Button text="Finalizar Compra" event={payment}></Button>
                    <h1>Total: R${total}.00</h1>  
                </div>
            </div>
        </div>
    )
}

export default Cart