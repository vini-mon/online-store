import styles from './Product.module.css'

//componente com um produto e suas informações
//reutilizado n vezes para mostrar todos os produtos da loja
//renderizado apenas se houver mais de uma unidade
function Product({source, name, description, price, sound, qnt, event, eventTarget}){
    if (qnt <= 0) return null;

    const button = { marginLeft: '45%'}

    //adicao do botao de som
    const setButton = () => {
        if( sound === '' ){
            return <button disabled style={button}><i className="fa-solid fa-play"></i></button>
        } else{
            return <button style={button}><i className="fa-solid fa-play"></i></button>
        }
    }

    //criacao do som
    const playSound = (soundSrc) => {
        var audioElement = new Audio(soundSrc);
        audioElement.play();
    }

    return (
        <div className={styles.box}>
            <img width="250px" height="300px" src={source} alt="Foto do Produto" className={styles.image}/>
            
            <h4>{name}</h4>
            <div className={styles.desc}>
                <p>{description}</p>
            </div>
            <p>Estoque: {qnt}</p>
            <p>Unidade: R&#36;&nbsp;{price}</p>
            <br />
            <div onClick={() => playSound(sound)} className={styles.soundBox}> { setButton() }  </div>
            <div className={styles.btnBox}>
                <button onClick={() => event(eventTarget)} className={styles.btn}>Add to cart</button>
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