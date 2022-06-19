import styles from './Button.module.css'

function event(){

    //console.log("Sem evento.")
    
}

function Button({text, event, eventTarget}){
    return(
        <button onClick={() => event(eventTarget)} className={styles.btn}> {text} </button>
    )
}

Button.defaultProps = {
    texto: "Texto Vazio",
    meuEvento: event(),
}

export default Button;