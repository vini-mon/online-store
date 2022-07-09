import styles from './Admin.module.css';
import UserList from '../components/admin/UserList';
import ProductList from '../components/admin/ProductList';

import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import useAuth from "../hooks/useAuth";



// função que define o dashboard do admin
// confere autentificação
// return: pagina do admin 
// milestone2: envia um alert sobre o produto criado
function Admin () {

    const { signout } = useAuth();

    const navigate = useNavigate();

    // armazenamento dinámico dos dados do produto criado
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');

    //arrow function para a criação do produto
    const createProduct = (e) => {
        e.preventDefault();
        if (!name || !text || !price || !stock) {
            alert('Preencha todos os campos');
            return;
        }
        alert('Produto criado: ' + name + ' - ' + text + ' - ' + price + ' - ' + stock);
    }

    return (
        <div>
            <div className={styles.dashboardAdmin}>
                <h2 className={styles.adminTitle}>Dashboard Admin</h2>
                <div className={styles.center}>
                    <button className={styles.btn} onClick={() => [signout(), navigate('/login')]}>Sair da conta</button><br/> 
                </div>
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
                            <UserList/>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={styles.dashboardProducts}>
                <div className="small-container">
                    <h2 className={styles.adminTitle}>Tabela de produtos</h2>
                    <div className="col-2">
                        <table cellSpacing="7" className={styles.adminTable}   >
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome do produto</th>
                                    <th>Descrição</th>
                                    <th>Estoque</th>
                                    <th>Vendidos</th>
                                    <th>Preço</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <ProductList/>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;