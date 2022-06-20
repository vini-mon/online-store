import styles from './Cart.module.css';
import cartList from '../json/cart';
import CartProduct from '../components/CartProduct';

import { useNavigate } from 'react-router-dom';

function Cart() {  

    let total = 0;

    cartList.map((product) => {
        total += product.qnt * product.price;
        return null;
    });

    const navigate = useNavigate();
    
    const payment = () => {
        navigate('/payment');
    }

    const handleAdd = (name) => {
        alert("Adicionado uma unidade a: " + name);
    }

    const handleRemove = (name) => {
        alert("Removido uma unidade a: " + name);
    }

    return (
        <div>
            <p className={styles.breadcrumb}><span className={styles.green}>Carrinho</span> <i className="fa-solid fa-circle-right"></i> Pagamento </p>
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
                        eventTarget={cart.name}
                    />      
                ))}
                <div className={styles.end}>
                    <span className={styles.total}> Total: R${total}.00 </span>
                    <button text="Finalizar Compra" className={styles.btn} onClick={payment}>Finalizar compra</button>
                </div>
            </div>
        </div>
    )
}

export default Cart