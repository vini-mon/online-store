import styles from './Product.module.css'
import {FaStar} from 'react-icons/fa'
import {FaStarHalfAlt} from 'react-icons/fa'
// import {FaCartPlus} from 'react-icons/fa'
import Button from './Button'

function Product({source, name, description, price}){
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
            <br/>
            <p>{price}</p>
            <Button text="Add to cart"/>
        </div>
    )
}

Product.defaultProps = {
        name: "Sem Nome.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        price: "Sem preco."
}

export default Product;