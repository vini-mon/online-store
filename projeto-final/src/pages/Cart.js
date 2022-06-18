import styles from './Cart.module.css';
import cartList from '../json/cart';
import Button from '../components/Button'

import { useState } from 'react';

function Cart() {
    const [total, setTotal] = useState();

    return(
        <div>
        <h1 className={styles.title}>Carrinho</h1>
            <div className={styles.box}>
                {cartList.map((cart) => (   
                    <div className={styles.boxProduct} key={cart.id}>
                        {/* {setTotal(cart.qnt * cart.price)}  */}
                        <img src={cart.img} alt="Foto Produto" className={styles.img}></img>
                        <div>
                            <div>
                                <h2>{cart.name}</h2>
                                <span>R${cart.price}.00</span>
                            </div>
                            <p>{cart.description}</p>
                            <p>Quantidade selecionada: {cart.qnt}</p>
                            <p>Subtotal: R${cart.qnt * cart.price}.00</p>
                        </div>   
                    </div>                          
                ))}
                <div className={styles.end}>
                    <Button text="Finalizar Compra"></Button>
                    <h1>Total: R${total}.00</h1>  
                </div>
            </div>
        </div>
    )
}

export default Cart