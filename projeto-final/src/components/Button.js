import styles from './Button.module.css'

function event(){

    console.log("Sem evento.")
    
}

function Button({text, event, eventTarget, classe}){
    return(
        <button onClick={() => event(eventTarget)} className={classe}> {text} </button>
    )
}

Button.defaultProps = {
    texto: "Texto Vazio",
    meuEvento: event(),
    classe: styles.btn
}

export default Button;