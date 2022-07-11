import styles from './Admin.module.css';
import UserList from '../components/admin/UserList';
import ProductList from '../components/admin/ProductList';

import React from 'react';
import Modal from 'react-modal';

import {useState, useEffect} from 'react';

import axios from 'axios';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * Estilização do Modal que é exibido ao clicar no botão de adicionar novo produto
 */
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
        margin: 'auto',
    },
    overlay: {
    }
};

/**
 * Definição de inicialização do componente Modal
 */
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
    
    /**
     * Função que define o estado inicial do componente Modal
     */
    const [modalIsOpen, setIsOpen] = useState(false);
    const [didClickButton, setDidClickButton] = useState(false);

    /**
     * Use Effect que faz a requisição para enviar dados do produto criado
     */
    useEffect(() => {
        /**
         * De forma assíncrona, envia os dados do produto criado
         */
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

        /**
         * Gatilho para a função de envio de dados do produto criado
         */
        if (didClickButton) {
            updateRequest();
        }

        /**
         * Volta o estado do botão de envio de dados do produto criado para falso, para que seja possível nova requisição
         */
        setDidClickButton(false);

    }, [didClickButton]);

    /**
     * Função de abertura do Modal
     */    
    function openModal() {
        setIsOpen(true);
    }

    /**
     * Função de fechamento do Modal
     */
    function closeModal(e) {
        e.preventDefault();
        setIsOpen(false);
    }

    /**
     * Função de notificação que chama o componente toast
     */
    function createProduct(e){
        e.preventDefault();

        /**
         * Funcão que chama o componente toast com a mensgem de sucesso
         * */
        notify("Produto criado com sucesso!");

        setDidClickButton(true);
        setIsOpen(false);
    }

    /**
     * Função que salva os dados do produto criado
     */
    function handleChange(e) {
        if (e.target.id === "0") setName(e.target.value);
        if (e.target.id === "1") setStock(e.target.value);
        if (e.target.id === "2") setPrice(e.target.value);
        if (e.target.id === "3") setImage(e.target.value);
        if (e.target.id === "4") setSound(e.target.value);
        if (e.target.id === "5") setDescription(e.target.value);
    }

    /**
     * Funcão de configuração de layout do componente toast de sucesso
     */
    const toastConfig = {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    }

    /**
     * Funcão de configuração de layout do componente toast de informação
     */
    
    const toastConfigInfo = {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    }

    /**
     * Função de notificação que chama o componente toast de sucesso
     */
    const notify = (msg) => toast(msg, toastConfig);

    /**
     * Função de notificação que chama o componente toast de Informação, dependendo da informação requisitada
     */
    const notifyInfo = (id) => {

        let msg = "-";

        /**
         * Switch que define a mensagem de acordo com o id do elemento clicado
         */
        
        switch(id) {

            case 0:
                msg = "Nome descritivo do produto.";
                break;
            case 1:
                msg = "Estoque do produto disponível no sistema.";
                break;
            case 2:
                msg = "Quantidade dos produtos vendidos é calculado automaticamente.";
                break;
            case 3:
                msg = "Preço do produto deve ser inserido usando virgula como separador de casas decimais.";
                break;
            case 4:
                msg = "A imagem do produto deve ser um arquivo de imagem com link público na internet. Recomenda-se a utilização do AWS S3. (Deixar vazio caso não queira imagem).";
                break;
            case 5:
                msg = "O áudio do produto deve ser um arquivo de áudio com link público na internet. Recomenda-se a utilização do AWS S3. (Deixar vazio caso não queira áudio).";
                break;
            case 6:
                msg = "Descrição completa e detalhada sobre o produto.";
                break;

        }

        /**
         * Chama o componente toast com a mensagem de informação
         */

        toast.info(msg, toastConfigInfo)
    
    };

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
            
            {/** Modal de criação de produto */}
            <Modal
                isOpen={modalIsOpen} onRequestClose={closeModal}
                style={customStyles} contentLabel="Example Modal"
            >

                <form className={styles.form}>

                    <h1>Cadastrar produto</h1>

                    <div className={styles.in}>
                        <label>Nome</label>
                        <div>
                            <input type="text" placeholder="Bolinha com sino" onChange={handleChange} id="0" defaultValue="" />
                            <i onClick={ () => notifyInfo(0) } className="fa-solid fa-circle-info"></i>
                        </div>
                    </div>
                    <div className={styles.in}>
                        <label>Estoque</label>
                        <div>
                            <input type="number" min="0" placeholder="15" onChange={handleChange} id="1" step="1" defaultValue="" />
                            <i onClick={ () => notifyInfo(1) } className="fa-solid fa-circle-info"></i>
                        </div>
                    </div>
                    <div className={styles.in}>
                        <label>Vendidos</label>
                        <div>
                            <input readOnly placeholder="N/A" className={styles.readOnly} type="number" defaultValue="" />
                            <i onClick={ () => notifyInfo(2) } className="fa-solid fa-circle-info"></i>
                        </div>
                    </div>

                    <div className={styles.in}>
                        <label>Preço</label>
                        <div>
                            <input type="number" placeholder="15,00" min="0.10" onChange={handleChange} id="2" step="0.10" defaultValue="" />
                            <i onClick={ () => notifyInfo(3) } className="fa-solid fa-circle-info"></i>
                        </div>
                    </div>
                    <div className={styles.in}>
                        <label>Imagem</label>
                        <div>
                            <input type="text" placeholder="URL público aws s3" onChange={handleChange} id="3" defaultValue="" />
                            <i onClick={ () => notifyInfo(4) } className="fa-solid fa-circle-info"></i>
                        </div>
                    </div>
                    <div className={styles.in}>
                        <label>Som</label>
                        <div>
                            <input type="text" placeholder="URL público aws s3" onChange={handleChange} id="4" defaultValue="" />
                            <i onClick={ () => notifyInfo(5) } className="fa-solid fa-circle-info"></i>
                        </div>
                        
                    </div>
                    <div className={styles.in}>
                        <label>Descrição</label>
                        <div>
                            <textarea type="text" placeholder="Uma descrição detalhada do produto" onChange={handleChange} id="5" defaultValue=""></textarea>
                            <i onClick={ () => notifyInfo(6) } className="fa-solid fa-circle-info"></i>
                        </div>
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