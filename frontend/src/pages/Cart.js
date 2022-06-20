import styles from './Cart.module.css';
import cartList from '../json/cart';
import CartProduct from '../components/CartProduct';

import { useNavigate } from 'react-router-dom';

function Cart() {  

    let total = 0;
    let qnt = [];

    cartList.map((product) => {
        qnt[product.id - 1] = product.qnt;
        total += product.qnt * product.price;
        return null;
    });

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
                {cartList.map((cart) => (
                    <CartProduct
                        name={cart.name} 
                        description={cart.description}
                        price={cart.price} 
                        qnt = {qnt[cart.id - 1]}
                        source={cart.img} 
                        key={cart.id} 
                        eventAdd={handleAdd}
                        eventRemove={handleRemove}
                        eventTarget={cart}
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