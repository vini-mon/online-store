import User from './User';
import axios from 'axios';
import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import styles from './ProductList.module.css';

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

    useEffect(() => {
        async function getProductList() {
            try {
                const res = await axios.get('http://localhost:3500/user');
                setUsers(res.data);
            } catch (e) {
                console.log(e);
            }
        }

        getProductList();
    }, [updated]);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal(e) {
        e.preventDefault();
        setIsOpen(false);
    }

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
                console.log(e)
            }
        }

        if (didClickButton) {
            updateRequest();
            setUpdated(true)
        }

        setDidClickButton(false);

    }, [didClickButton]);

    function editUser(e) {
        e.preventDefault();

        setDidClickButton(true);
        setIsOpen(false);
        setUpdated(false);
    }

    function editClick(id, name, email, admin, phone, address) {
        setId(id);
        setName(name);
        setEmail(email);
        setAdmin(admin);
        setPhone(phone);
        setAddress(address);

        openModal();
    }

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

        setUpdated(false)
    }

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
                    <div className={styles.in}>
                        <label>Nome</label>
                        <input type="text" onChange={handleChange} id="0" value={name} />
                    </div>
                    <div className={styles.in}>
                        <label>Email</label>
                        <input type="text" onChange={handleChange} id="1" value={email} />
                    </div>
                    <div className={styles.in}>
                        <label>Phone</label>
                        <input type="text" onChange={handleChange} id="2" value={phone} />
                    </div>
                    <div className={styles.in}>
                        <label>Address</label>
                        <input type="text" onChange={handleChange} id="3" value={address} />
                    </div>
                    <div className={styles.in}>
                        <label>Admin</label>
                        <input type="text" onChange={handleChange} id="4" value={admin} />
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