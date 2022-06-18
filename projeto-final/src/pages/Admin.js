import styles from './Admin.module.css';

function Admin (){

    function edit(id){

        console.log("edit: ", id);
    
    }
    
    function trash(id){
    
        console.log("delete: ", id);
    
    }

    return(

        <div>

            <div className={styles.dashboardAdmin}>

                <h2 className={styles.adminTitle}>Dashboard Admin</h2>

                <div className="col-2">

                    <table cellSpacing="5" className={styles.adminTable}>

                        <thead>

                            <tr>

                            <th>ID</th>
                            <th>Nome</th>
                            <th>Função</th>
                            <th>Ações</th>

                            </tr>

                        </thead>

                        <tbody>

                            <tr>

                            <td>1</td>
                            <td>João Pedro</td>
                            <td>Produtos</td>
                            <td>
                                <i onClick={() => edit(1)} className={styles.editIcon}><i className="fas fa-edit"></i></i>&nbsp;
                                <i onClick={() => trash(1)} className={styles.trashIcon}><i className="fa-solid fa-trash"></i></i>
                            </td>

                            </tr>

                            <tr className={styles.trColored}>

                            <td>2</td>
                            <td>Vinícius Monteiro</td>
                            <td>Serviços</td>
                            <td>
                                <i onClick={() => edit(2)} className={styles.editIcon}><i className="fas fa-edit"></i></i>&nbsp;
                                <i onClick={() => trash(2)} className={styles.trashIcon}><i className="fa-solid fa-trash"></i></i>
                            </td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

            <div className={styles.dashboardProducts}>

                <div className="small-container">

                    <h2 className={styles.adminTitle}>Tabela de produtos</h2>

                    <div className="col-2">

                        <table cellSpacing="5" className={styles.adminTable}   >

                            <thead>

                                <tr>

                                    <th>ID</th>
                                    <th>Nome do produto</th>
                                    <th>Estoque</th>
                                    <th>Preço</th>
                                    <th>Ações</th>

                                </tr>

                            </thead>

                            <tbody>

                                <tr>

                                    <td>1</td>
                                    <td>Óculos fashion</td>
                                    <td>7</td>
                                    <td>R$ 30,00</td>
                                    <td>
                                        <i className={styles.editIcon}><i className="fas fa-edit"></i></i>&nbsp;
                                        <i className={styles.trashIcon}><i className="fa-solid fa-trash"></i></i>
                                    </td>

                                </tr>

                                <tr className={styles.trColored}>

                                    <td>2</td>
                                    <td>Arranhador Bastão</td>
                                    <td>9</td>
                                    <td>R$ 90,00</td>
                                    <td>
                                        <i className={styles.editIcon}><i className="fas fa-edit"></i></i>&nbsp;
                                        <i className={styles.trashIcon}><i className="fa-solid fa-trash"></i></i>
                                    </td>

                                </tr>

                            </tbody>

                        </table>

                    </div>
                    
                </div>
                
            </div>

        </div>

    );

}

export default Admin;