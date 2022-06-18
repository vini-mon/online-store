import styles from './Product.module.css'
import {FaStar} from 'react-icons/fa'
import {FaStarHalfAlt} from 'react-icons/fa'
import Button from './Button'

function Product({source, name, description, price, qnt, event, eventTarget}){
    if (qnt <= 0){
        return null;
    }

    return(
        <div className={styles.box}>
            <img src={source} alt="Foto do Produto" className={styles.image}/>
            <div className={styles.star}>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStarHalfAlt/>
            </div>
            <h4>{name}</h4>
            <p>{description}</p>
            <p>Quantidade em estoque: {qnt}</p>
            <p>{price}</p>
            <div className={styles.btnBox}>
                <Button text="Add to cart" event={event} eventTarget={eventTarget}/>
            </div>
        </div>
    )
}

Product.defaultProps = {
        name: "Sem Nome.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        price: "Sem preco."
}

export default Product;