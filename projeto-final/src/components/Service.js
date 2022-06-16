import styles from './Service.module.css'
import Button from './Button'
import {FaCalendarAlt} from 'react-icons/fa'

function Service({source, name, description, price}) {
    return(
        <div className={styles.box}>
            <img src={source} alt="Foto do Serviço" className={styles.image}/>
            <h4>{name}</h4>
            <p>{description}</p>
            <br/>
            <p>{price}</p>
            <div>
                <Button text='Add to cart'/>
                <button className={styles.calendar}><FaCalendarAlt></FaCalendarAlt></button>
            </div>
            
        </div>
    )
        
}

Service.defaultProps = {
    name: "Sem Nome.",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "Sem preco."
}

export default Service;