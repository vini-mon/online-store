import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import styles from './Forms.module.css';
import userIcon from '../img/account/login.png';
import axios from 'axios';

function UserAccount() {

    const navigate = useNavigate();

    let user = JSON.parse(localStorage.getItem('token'));

    //variaveis dinamicas com armazenam auterações nos dados dos usuários
    const [name, setName] = useState(user.name);
    const [address, setAddress] = useState(user.address);
    const [phone, setPhone] = useState(user.phone);
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [error, setError] = useState();

    const [didClickButton, setDidClickButton] = useState(false);

    useEffect(() => {
        async function checkPassword(userEmail, userPassword) {
            try {
                await axios.post('http://localhost:3500/user/auth', {
                    email: userEmail,
                    password: userPassword
                });
                setError('')
            } catch(e) {
                setError(e.response.data.message)
            }
        }

        async function update(userEmail, info) {
            try {
                await axios.put('http://localhost:3500/user/' + userEmail, info);
                setError('Alterações realizadas') // OBS COLOCAR UM TOAST AQUI
            } catch(e) {
                console.log(e)
            }
        }

        async function getUser(userEmail) {
            try {
                const res = await axios.get('http://localhost:3500/user/' + userEmail);
                localStorage.setItem('token', JSON.stringify(res.data))
            } catch(e) {
                localStorage.removeItem('token')
            }
        }


        if (didClickButton) {
            console.log("AAAAAA")
            checkPassword(user.email, password);
            if (error === '') {
                update(user.email, {
                    name: name,
                    address: address,
                    phone: phone
                });
                getUser(user.email);
            }
        }

        setDidClickButton(false);

    }, [didClickButton]);

    //função que realiza a atualização dos dados do usuário
    //acionada ao clica no botão "Salvar Alterações"
    const handleUpdate = (e) => {
        e.preventDefault();

        //validaçoes
        if (!name || !address || !phone || !password || !confirmPassword) {
            setError('Preencha todos os campos')
            return
        }
        if (password !== confirmPassword) {
            setError('As senhas não conferem')
            return
        }

        setDidClickButton(true);
    }

    const signOut = () => {
        localStorage.removeItem('token');
        navigate('/login');
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
                                
                        <input id="address" type="text" value={address} placeholder="Endereço"
                        onChange={(e) => [setAddress(e.target.value), setError('')]}  
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
                        {/* redirecionamento para a pagina inicial e saida da conta */}
                        <button className={styles.btn} onClick={signOut}>Sair da conta</button><br/>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default UserAccount