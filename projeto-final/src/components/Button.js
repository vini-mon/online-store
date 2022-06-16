import styles from './Button.module.css'

function event(){

    console.log("Sem evento.")
    
}

function Button({text, event, classe}){
    return(
        <button onClick={event} className={classe}> {text} </button>
    )
}

Button.defaultProps = {
    texto: "Texto Vazio",
    meuEvento: event(),
    classe: styles.btn
}

export default Button;