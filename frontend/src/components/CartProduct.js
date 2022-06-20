import styles from './CartProduct.module.css'
import Button from './Button'

function CartProduct({source, name, description, price, qnt, eventAdd, eventRemove, eventTarget}){
    if (qnt <= 0){
        return null;
    }

    return(
        <div className={styles.boxProduct}>
            <img src={source} alt={name} className={styles.img}></img>
            <div>
                <div>
                    <h2>{name}</h2> 
                    <span>R${price}.00</span>
                </div>
                <p>{description}</p>
                <div className={styles.add}>
                    <Button text="-" event={eventRemove} eventTarget={eventTarget}></Button>    
                    <p>{qnt}</p>
                    <Button text="+" event={eventAdd} eventTarget={eventTarget}></Button>    
                </div> 
                <p>Subtotal: R${qnt * price}.00</p>
            </div>  
            
        </div>
    )
}

export default CartProduct;