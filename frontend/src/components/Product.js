import styles from './Product.module.css'
import {FaStar} from 'react-icons/fa'
import {FaStarHalfAlt} from 'react-icons/fa'
import Button from './Button'

//componente com um produto e suas informações
//reutilizado n vezes para mostrar todos os produtos da loja
//renderizado apenas se houver mais de uma unidade
function Product({source, name, description, price, sound, qnt, event, eventTarget}){
    
    if (qnt <= 0) return null;

    const button = { marginLeft: '45%'}

    const setButton = () => {

        if( sound === '' ){

            return <button disabled style={button}><i className="fa-solid fa-play"></i></button>

        }else{

            return <button style={button}><i className="fa-solid fa-play"></i></button>

        }

    }

    const playSound = (soundSrc) => {

        console.log(soundSrc)

        if( soundSrc === '') console.log('sound track unvailable');

        var audioElement = new Audio(soundSrc);

        audioElement.play();

    }

    return (
        <div className={styles.box}>
            <img width="250px" height="300px" src={source} alt="Foto do Produto" className={styles.image}/>

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
            <p>R&#36;&nbsp;{price}</p>

            <div onClick={ () => playSound(sound) } > { setButton() } </div>

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