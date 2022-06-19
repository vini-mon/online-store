import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import styles from './Forms.module.css';
import userIcon from '../img/account/login.png';

function UserAccount() {

    const { signout, getInfo, updateInfo } = useAuth();
    const email = useAuth();
    const navigate = useNavigate();

    let info = getInfo(email.email);

    const [name, setName] = useState(info.name);
    const [adress, setAdress] = useState(info.adress);
    const [phone, setPhone] = useState(info.phone);
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [error, setError] = useState();

    const handleUpdate = (e) => {
        e.preventDefault();

        if (!name || !adress || !phone || !password || !confirmPassword) {
            setError('Preencha todos os campos')
            return
        }

        if (password !== confirmPassword) {
            setError('As senhas não conferem')
            return
        }

        if (password !== info.password) {
            setError('Senha incorreta')
            return
        }

        const newInfo = {
            name,
            adress,
            phone
        }

        const res = updateInfo(newInfo)
        setError(res)
    }

    return (
        <div>
            <h2 className={styles.title}>Sua conta</h2>
            <div className={styles.loginBox}>
                <img src={userIcon} alt="Icone de Login" className={styles.loginImg}/>
                <div className={styles.loginInput}>
                    <form> 
                        <input id="name" type="text" value={name} placeholder="Nome"
                        onChange={(e) => [setName(e.target.value), setError('')]}  
                        className={styles.loginField}/> <br/>
                                
                        <input id="adress" type="text" value={adress} placeholder="Endereço"
                        onChange={(e) => [setAdress(e.target.value), setError('')]}  
                        className={styles.loginField}/> <br/>

                        <input id="phone" type="text" value={phone} placeholder="Telefone"
                        onChange={(e) => [setPhone(e.target.value), setError('')]}  
                        className={styles.loginField}/> <br/>

                        <input id="password" type="password" placeholder="Senha"
                        onChange={(e) => [setPassword(e.target.value), setError('')]} 
                        className={styles.loginField}/> <br/>

                        <input id="confirmPassword" type="password" placeholder="Confirmar senha"
                        onChange={(e) => [setConfirmPassword(e.target.value), setError('')]}
                        className={styles.loginField}/> <br/>

                        <p>{error}</p> <br/>

                        <button className={styles.btn} onClick={handleUpdate}> Salvar alterações</button><br/>
                        <button className={styles.btn} onClick={() => [signout(), navigate('/')]}>Sair da conta</button><br/>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default UserAccount