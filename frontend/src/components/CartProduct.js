import styles from './CartProduct.module.css'
import Button from './Button'
import cartList from '../json/cart.json';

function CartProduct({ eventAdd, eventRemove, eventTarget, id}){
    let name = ""
    let qnt = -1
    let price = -1
    let source = ""
    let description = ""
    cartList.map( product => {
        if(product.id === id){
            name = product.name
            qnt = product.qnt
            price = product.price
            source = product.img
            description = product.description
        }
    })

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