import styles from './Admin.module.css';
import UserList from '../components/admin/UserList';
import ProductList from '../components/admin/ProductList';

import { useState } from 'react';

function Admin () {

    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');

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
                                <tr>
                                    <td></td>
                                    <td>
                                        <textarea className={styles.name} placeholder="Nome do produto" type="text"
                                        onChange={(e) => setName(e.target.value)} />
                                    </td>
                                    <td>
                                        <textarea className={styles.text} placeholder="Descrição do produto" type="text"
                                        onChange={(e) => setText(e.target.value)} />
                                    </td>
                                    <td>
                                        <textarea className={styles.number} placeholder="0" type="text"
                                        onChange={(e) => setPrice(e.target.value)} />
                                    </td>
                                    <td></td>
                                    <td>
                                        <textarea className={styles.price} placeholder="0" type="text"
                                        onChange={(e) => setStock(e.target.value)} />
                                    </td>
                                    <td>
                                        <i className={styles.confirmIcon} onClick={createProduct}><i className="fa-solid fa-check"></i></i>
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