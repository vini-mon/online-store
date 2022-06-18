import styles from './Cart.module.css';
import cartList from '../json/cart';
import Button from '../components/Button'

function Cart() {
    return(
        <div className={styles.box}>
            {cartList.map((cart) => (   
                <div className={styles.boxProduct}>                
                    <img src={cart.img} alt="Foto Produto" className={styles.img}></img>
                    <div>
                        <div>
                            <h2>{cart.name}</h2>
                            <span>{cart.price}</span>
                        </div>
                        <p>{cart.description}</p>
                        <p>Quantidade selecionada: {cart.qnt}</p>
                    </div>   
                </div>                                 
            ))}
            <Button></Button>
        </div>
    )
}

export default Cart