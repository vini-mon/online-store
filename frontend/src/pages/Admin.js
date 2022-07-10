import styles from './Admin.module.css';
import UserList from '../components/admin/UserList';
import ProductList from '../components/admin/ProductList';

import React from 'react';
import Modal from 'react-modal';

import {useState, useEffect} from 'react';

import axios from 'axios';

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
function Admin() {

    // armazenamento dinámico dos dados do produto criado
    const [name, setName] = useState('');
    const [stock, setStock] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [sound, setSound] = useState('');
    const [description, setDescription] = useState('');
    
    const [modalIsOpen, setIsOpen] = useState(false);
    const [didClickButton, setDidClickButton] = useState(false);

    useEffect(() => {
        async function updateRequest() {
            try {
                await axios.post('http://localhost:3500/product', {
                    name: name,
                    description: description,
                    price: price,
                    stock: stock,
                    img: image,
                    sound: sound
                });
            } catch(e) {}
        }

        if (didClickButton) {
            updateRequest();
        }

        setDidClickButton(false);

    }, [didClickButton]);

    
    function openModal() {
        setIsOpen(true);
    }

    function closeModal(e) {
        e.preventDefault();
        setIsOpen(false);
    }

    function createProduct(e){
        e.preventDefault();

        setDidClickButton(true);
        setIsOpen(false);
    }

    function handleChange(e) {
        if (e.target.id === "0") setName(e.target.value);
        if (e.target.id === "1") setStock(e.target.value);
        if (e.target.id === "2") setPrice(e.target.value);
        if (e.target.id === "3") setImage(e.target.value);
        if (e.target.id === "4") setSound(e.target.value);
        if (e.target.id === "5") setDescription(e.target.value);
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
                    <div className={styles.center}>
                        <button className={styles.btn2} onClick={openModal}>Adicionar novo produto</button>
                    </div>
                    <div className="col-2">
                        <table cellSpacing="7" className={styles.adminTable}>
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

            <Modal
                isOpen={modalIsOpen} onRequestClose={closeModal}
                style={customStyles} contentLabel="Example Modal"
            >

                <form className={styles.form}>

                    {/* <label>Id</label> */}
                    {/* <input readOnly className={styles.readOnly} type="text" defaultValue={modalId} /> <br /> */}
                    <div className={styles.in}>
                        <label>Nome</label>
                        <input type="text" onChange={handleChange} id="0" defaultValue="" />
                    </div>
                    <div className={styles.in}>
                        <label>Estoque</label>
                        <input type="number" onChange={handleChange} id="1" step="1" defaultValue="" />
                    </div>
                    <div className={styles.in}>
                        <label>Vendidos</label>
                        <input readOnly className={styles.readOnly} type="number" defaultValue="" />
                    </div>

                    <div className={styles.in}>
                        <label>Preço</label>
                        <input type="number" onChange={handleChange} id="2" step="0.01" defaultValue="" />
                    </div>
                    <div className={styles.in}>
                        <label>Imagem</label>
                        <input type="text" onChange={handleChange} id="3" step="0.01" defaultValue="" />
                    </div>
                    <div className={styles.in}>
                        <label>Som</label>
                        <input type="text" onChange={handleChange} id="4" step="0.01" defaultValue="" />
                    </div>
                    <div className={styles.in}>
                        <label>Descrição</label>
                        <textarea type="text" onChange={handleChange} id="5" defaultValue=""></textarea>
                    </div>
                    
                    <br/>

                    <div className={styles.inline}>
                        <input type="submit" className={styles.submit} onClick={(e)=>createProduct(e)} value="Salvar mudanças" />
                        <button className={styles.cancel} onClick={(e) => closeModal(e)}>Cancelar</button>
                    </div>

                </form>

            </Modal>

        </div>
    );
}

export default Admin;