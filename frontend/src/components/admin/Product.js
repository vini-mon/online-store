import styles from '../../pages/Admin.module.css'

//componenete utilizado no dashboard do adm, para visualizar e futuramente remover produtos
function Product(props) {
    //função para alterar o style do componente
    function getStyle() {
        if (props.style % 2 === 1) {
            return styles.trColored;
        }
    }

    return (

        <tr className={getStyle()}>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.desc}</td>
            <td>{props.stock}</td>
            <td>{props.sold}</td>
            <td>{props.price}</td>
            <td>
                <i onClick={props.edit} className={styles.editIcon}><i className="fas fa-edit"></i></i>&nbsp;
                <i onClick={props.upload} className={styles.editIcon}><i class="fa-solid fa-file-arrow-up"></i></i>
                <i onClick={props.remove} className={styles.trashIcon}><i className="fa-solid fa-trash"></i></i>
            </td>
        </tr>
        
    )
}

export default Product;