import styles from '../../pages/Admin.module.css'

//componente utilizado para renderizar a aba de gerenciamento de usuarios
function User(props) {
    //função para alterar a cor do componente
    function getStyle() {
        if (props.style % 2 === 1) {
            return styles.trColored;
        }
    }

    return (
        <tr className={getStyle()}>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.admin ? "admin" : "user"}</td>
            <td>
                <i onClick={props.edit} className={styles.editIcon}><i className="fas fa-edit"></i></i>&nbsp;
                <i onClick={props.remove} className={styles.trashIcon}><i className="fa-solid fa-trash"></i></i>
            </td>
        </tr>
        
    )
}

export default User;