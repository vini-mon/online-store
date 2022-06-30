import styles from './Product.module.css'
import {FaStar} from 'react-icons/fa'
import {FaStarHalfAlt} from 'react-icons/fa'
import Button from './Button'

import useSound from 'use-sound';

import borracha from '../components/sounds/brinqBorracha.mp3';
import sino from '../components/sounds/bolinha.mp3';

//componente com um produto e suas informações
//reutilizado n vezes para mostrar todos os produtos da loja
//renderizado apenas se houver mais de uma unidade
function Product({source, name, description, price, sound, qnt, event, eventTarget}){
    
    if (qnt <= 0) return null;

    const BoopButton = (sound) => {
        let toy, vol, playIcon;

        (sound === "undefined") ? playIcon = "fa-solid fa-volume-xmark" : playIcon = "fa-solid fa-play";

        if (sound === "borracha") {
            toy = borracha;
            vol = 0.25;
        } else if (sound === "sino") {
            toy = sino;
            vol = 1;
        }

        const [play] = useSound(toy, {volume: vol});
      
        return <button style={{marginLeft: "85px"}} onClick={play}><i className={playIcon}></i></button>;
    };

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

            { BoopButton(sound) }

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