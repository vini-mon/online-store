import styles from './ConfirmProduct.module.css'
import useAxios from "../hooks/useAxios";
import axios from "../api/axiosInstance";

function CartProduct({id}){
    let name = ""
    let qnt = -1
    let price = -1
    let img = ""
    let description = ""

    // pega o produto do localStorage
    const cartStorage = localStorage.getItem('ProductList');
    const cart = cartStorage ? JSON.parse(cartStorage) : {};

    // pega o produto do banco
    const [products, error, loading] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: 'http://localhost:3500/product/',
        requestConfig: {

        }
    })
    products.map( product => {
        // se o produto do bd for o mesmo do localStorage, pega os dados
        if(product._id === id){
            for (let productId in cart) {
                if(productId === id ){
                    qnt = cart[productId]
                }
            }

            img = product.img
            description = product.description
            name = product.name
            price = product.price
        }
        return null;
    })

    return(
        <>
            {qnt > 0 &&
                <div className={styles.boxProduct}>
                    <div className={styles.prod}>
                        <img src={img} alt="Sem foto." className={styles.image}/>
                        <div className={styles.info}>
                            <p>{name}</p> 
                        </div>
                    </div>
                    <div className={styles.price}>
                        <p>R${price}</p>
                    </div>
                    <div className={styles.qnt}>  
                        <p>{qnt}</p>
                    </div> 
                    <div className={styles.subtotal}>  
                        <p>R${(qnt * price).toFixed(2)}</p> 
                    </div> 
                </div>
            }
        </>
        
    )
}

export default CartProduct;