import styles from './CartProduct.module.css'
import Button from './Button'

function CartProduct({source, name, description, price, qnt}){
    if (qnt <= 0){
        return null;
    }

    return(
        <div className={styles.boxProduct}>
            <img src={source} alt="Foto Produto" className={styles.img}></img>
            <div>
                <div>
                    <h2>{name}</h2> 
                    <span>R${price}.00</span>
                </div>
                <p>{description}</p>
                <p>Quantidade selecionada: {qnt}</p>
                <p>Subtotal: R${qnt * price}.00</p>
            </div>   
        </div>
    )
}

export default CartProduct;