import styles from './Button.module.css'

//botao simples reutilizado em outros componentes
function Button({text, event, eventTarget}){
    return(
        <button onClick={() => event(eventTarget)} className={styles.btn}> {text} </button>
    )
}

//valor apenas para facilitar o desenvolvimento
Button.defaultProps = {
    texto: "Texto Vazio",
}

export default Button;