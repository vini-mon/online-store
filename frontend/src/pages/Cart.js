import styles from './Cart.module.css';
import CartProduct from '../components/CartProduct';
import cartList from '../json/products.json';

import { useNavigate } from 'react-router-dom';

function Cart() {  

    let total = 0;
    let qnt = [];

    const cartStorage = localStorage.getItem('ProductList');
    const cart = cartStorage ? JSON.parse(cartStorage) : {};
    
    for (let productId in cart) {
        total += cart[productId] * cartList[productId];
        qnt[productId - 1] = cart[productId];
    }

    const navigate = useNavigate();
    
    const payment = () => {
        navigate('/payment');
    }

    const handleAdd = (product) => {
        qnt[product.id - 1] += 1;
        console.log(qnt[product.id - 1])
    }

    const handleRemove = (product) => {
        qnt[product.id - 1] -= 1;
        console.log(qnt[product.id - 1])
    }

    return (
        <div>
            <p className={styles.breadcrumb}><span className={styles.green}>Carrinho</span> <i className="fa-solid fa-circle-right"></i> Pagamento </p>
            <h1 className={styles.title}>Carrinho</h1>
            <div className={styles.box}>
                {Object.keys(cart).map(function(index, key) {
                    return <CartProduct key={key} id={parseInt(index, 10)}/>
                })}
                <div className={styles.end}>
                    <span className={styles.total}> Total: R${total}.00 </span>
                    <button text="Finalizar Compra" className={styles.btn} onClick={payment}>Finalizar compra</button>
                </div>
            </div>
        </div>
    )
}

export default Cart