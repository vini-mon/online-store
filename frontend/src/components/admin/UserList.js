import User from './User';
import axios from 'axios';
import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import styles from './ProductList.module.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//customizacao do popup
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

function UserList() {
    //variaveis para armazenamento do dados e estados
    const [modalIsOpen, setIsOpen] = useState(false);
    const [updated, setUpdated] = useState(false);
    const [didClickButton, setDidClickButton] = useState(false);
    const [id, setId] = useState(-1);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [admin, setAdmin] = useState('');
    const [users, setUsers] = useState([]);

    //requisicao dos usuarios toda vez q um usuario eh atualizado  
    useEffect(() => {
        async function getProductList() {
            try {
                const res = await axios.get('http://localhost:3500/user');
                setUsers(res.data);
            } catch (e) {
            }
        }

        getProductList();
    }, [updated]);

    //criacao dos toasts e customizacao
    const notify = (msg) => toast(msg, toastConfig);
    const notifyInfo = (msg) => toast.info(msg, toastConfig);
    const notifyInfoI = (id) => {
        let msg = "-";
        
        switch(id) {
            case 0:
                msg = "Nome do usário";
                break;
            case 1:
                msg = "Email do usário";
                break;
            case 2:
                msg = "Telefone do usário";
                break;
            case 3:
                msg = "Endereço do usário";
                break;
            case 4:
                msg = "Permissão do usário. Pode assumir valor [true] ou [false]";  
                break;
            default:
                break;
        }
        toast.info(msg, toastConfigInfo)
    };
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

    //funcoes para abrir e fechar o popup
    function openModal() {
        setIsOpen(true);
    }
    function closeModal(e) {
        e.preventDefault();
        setIsOpen(false);
    }

    //alteracao no bd dos dados dos usuarios todas as vezes que o botao eh clicado
    useEffect(() => {
        async function updateRequest() {
            try {
                await axios.put('http://localhost:3500/user/admin/' + id, {
                    name: name,
                    email: email,
                    phone: phone,
                    address: address,
                    admin: admin
                });
            } catch(e) {
            }
        }

        if (didClickButton) {
            updateRequest();
            setUpdated(true)
        }

        setDidClickButton(false);

    }, [didClickButton]);

    //funcao de edicao do usuario
    function editUser(e) {
        e.preventDefault();

        notify("Usuário atualizado com sucesso!");

        setDidClickButton(true);
        setIsOpen(false);
        setUpdated(false);
    }

    //evento de edicao do usuario
    function editClick(id, name, email, admin, phone, address) {
        setId(id);
        setName(name);
        setEmail(email);
        setAdmin(admin);
        setPhone(phone);
        setAddress(address);

        openModal();
    }

    //evento de remocao do usuario
    function removeUser(userId) {
        async function deleteProduct(userId) {
            try {
                await axios.delete('http://localhost:3500/user/' + userId);
                setUpdated(true);
            } catch (e) {
                console.log(e);
            }
        }

        deleteProduct(userId);
        notifyInfo("Usuário removido com sucesso!");
        setUpdated(false)
    }

    //atualizacao dos dados do usuario dinamicamente com a escrita
    function handleChange(e) {
        if (e.target.id === "0") setName(e.target.value);
        if (e.target.id === "1") setEmail(e.target.value);
        if (e.target.id === "2") setPhone(e.target.value);
        if (e.target.id === "3") setAddress(e.target.value);
        if (e.target.id === "4") setAdmin(e.target.value);
    }

    return (
        <>
            {users.map((user, key) => {
                return (
                    <User key={key}
                        id={user._id}
                        name={user.name}
                        admin={user.admin}
                        edit={() => editClick(user._id, user.name, user.email, user.admin, user.phone, user.address)}
                        remove={() => removeUser(user._id)}
                        style={key}
                    />
                )
            })}

            <Modal
                isOpen={modalIsOpen} onRequestClose={closeModal}
                style={customStyles} contentLabel="Example Modal"
                >

                <form className={styles.form}>

                    <h1>Alteração de usuário</h1>

                    <div className={styles.in}>
                        <label>Nome</label>
                        <div>
                            <input type="text" placeholder="Nome do usário" onChange={handleChange} id="0" value={name} />
                            <i onClick={ () => notifyInfoI(0) } className="fa-solid fa-circle-info"></i>
                        </div>
                    </div>
                    <div className={styles.in}>
                        <label>Email</label>
                        <div>
                            <input type="text" placeholder="Email do usuário" onChange={handleChange} id="1" value={email} />
                            <i onClick={ () => notifyInfoI(1) } className="fa-solid fa-circle-info"></i>
                        </div>
                    </div>
                    <div className={styles.in}>
                        <label>Phone</label>
                        <div>
                            <input type="text" placeholder="Telefone do usuário" onChange={handleChange} id="2" value={phone} />
                            <i onClick={ () => notifyInfoI(2) } className="fa-solid fa-circle-info"></i>
                        </div>
                    </div>
                    <div className={styles.in}>
                        <label>Address</label>
                        <div>
                            <input type="text" placeholder="Endereço do usuário" onChange={handleChange} id="3" value={address} />
                            <i onClick={ () => notifyInfoI(3) } className="fa-solid fa-circle-info"></i>
                        </div>
                    </div>
                    <div className={styles.in}>
                        <label>Admin</label>
                        <div>
                            <input type="text" placeholder="[true] ou [false]" onChange={handleChange} id="4" value={admin} />
                            <i onClick={ () => notifyInfoI(4) } className="fa-solid fa-circle-info"></i>
                        </div>
                    </div>
                    
                    <br/>

                    <div className={styles.inline}>
                        <input type="submit" className={styles.submit} onClick={(e)=>editUser(e)} value="Salvar mudanças" />
                        <button className={styles.cancel} onClick={(e) => closeModal(e)}>Cancelar</button>
                    </div>

                </form>

            </Modal>
        </>
    )
}

export default UserList