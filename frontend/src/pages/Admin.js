import styles from './Admin.module.css';
import UserList from '../components/admin/UserList';
import ProductList from '../components/admin/ProductList';

import React from 'react';
import Modal from 'react-modal';

import {useNavigate} from 'react-router-dom'
import {useState} from 'react';
import useAuth from "../hooks/useAuth";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '15px',
        border: '1px solid #ff8ae2',
        borderRadius: '20px',
        color: 'black',
        boxShadow: '0 0 1em #ff8ae2',
    },
    overlay: {
    }
};

Modal.setAppElement('body');

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
    
    const [modalIsOpen, setIsOpen] = React.useState(false);
    
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    
    }

    function closeModal(e) {

        e.preventDefault();
        setIsOpen(false);

    }

    function updateProduct(e){
        e.preventDefault();
    }

    //arrow function para a criação do produto
    const createProduct = (e) => {
        openModal();
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
                <div className={styles.center}>
                    <button className={styles.btn} onClick={() => [signout(), navigate('/login')]}>Sair da conta</button><br/> 
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
                    <div className={styles.center}>
                        <button className={styles.btn2} onClick={createProduct}>Adicionar novo produto</button>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal}
                style={customStyles} contentLabel="Example Modal"
            >

                <form className={styles.form}>

                    {/* <label>Id</label> */}
                    {/* <input readOnly className={styles.readOnly} type="text" defaultValue={modalId} /> <br /> */}
                    <div className={styles.in}>
                        <label>Nome</label>
                        <input type="text" defaultValue="" />
                    </div>
                    <div className={styles.in}>
                        <label>Estoque</label>
                        <input type="number" step="1" defaultValue="" />
                    </div>
                    <div className={styles.in}>
                        <label>Vendidos</label>
                        <input readOnly className={styles.readOnly} type="number" defaultValue="" />
                    </div>
                    <div className={styles.in}>
                        <label>Preço</label>
                        <input type="number" step="0.01" defaultValue="" />
                    </div>
                    <div className={styles.in}>
                        <label>Imagem</label>
                        <input type="text" step="0.01" defaultValue="" />
                    </div>
                    <div className={styles.in}>
                        <label>Som</label>
                        <input type="text" step="0.01" defaultValue="" />
                    </div>
                    <div className={styles.in}>
                        <label>Descrição</label>
                        <textarea type="text" defaultValue=""></textarea>
                    </div>
                    
                    <br/>

                    <div className={styles.inline}>
                        <input type="submit" className={styles.submit} onClick={(e)=>updateProduct(e)} value="Salvar mudanças" />
                        <button className={styles.cancel} onClick={(e) => closeModal(e)}>Cancelar</button>
                    </div>

                </form>

            </Modal>

        </div>
    );
}

export default Admin;