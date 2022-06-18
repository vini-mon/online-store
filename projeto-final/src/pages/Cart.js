import styles from './Cart.module.css';
import cartList from '../json/cart';
import Button from '../components/Button'
import CartProduct from '../components/CartProduct'

function Cart() {
    let total = 0;
    cartList.map(product => {
        total += product.qnt * product.price;
    });

    return(
        <div>
        <h1 className={styles.title}>Carrinho</h1>
            <div className={styles.box}>
                {cartList.map((cart) => (
                    <CartProduct
                        name={cart.name} 
                        price={cart.price} 
                        qnt = {cart.qnt}
                        source={cart.img} 
                        key={cart.id} 
                    />   
                    // <div className={styles.boxProduct} key={cart.id}>
                    //     <img src={cart.img} alt="Foto Produto" className={styles.img}></img>
                    //     <div>
                    //         <div>
                    //             <h2>{cart.name}</h2>
                    //             <span>R${cart.price}.00</span>
                    //         </div>
                    //         <p>{cart.description}</p>
                    //         <p>Quantidade selecionada: {cart.qnt}</p>
                    //         <p>Subtotal: R${cart.qnt * cart.price}.00</p>
                    //     </div>   
                    // </div>                          
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