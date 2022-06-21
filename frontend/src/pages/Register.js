import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import styles from './Forms.module.css';
import userIcon from '../img/account/login.png';
import useAuth from '../hooks/useAuth';

// função que comanda o registro de usuários
// realiza cadastramentos de novos usuários
// return: HTML do form de registro
function FormsRegister() {

    // variaveis de estado para o registro
    const { signup } = useAuth();
    const navigate = useNavigate();

    // variaveis dinámicas do registro do usuário
    const [name, setName] = useState();
    const [adress, setAdress] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [error, setError] = useState();

    //função para realizar o cadastro
    //acionada quando o botão "Registrar" é clicado
    const handleSignup = (e) => {
        e.preventDefault();

        // validação dos campos
        if (!name || !adress || !phone || !email || !password || !confirmPassword) {
            setError('Preencha todos os campos')
            return
        } else if (password !== confirmPassword) {
            setError('As senhas não conferem')
            return
        }

        const info = {
            email,
            password,
            name,
            adress,
            phone
        }

        //registro do usuário
        const res = signup(info);
        if (res) {
            setError(res)
            return
        }

        navigate('/login')
    }

    return (
        <div>
            <h2 className={styles.title}>Registre-se</h2>
            <div className={styles.loginBox}>
                <img src={userIcon} alt="Icone de Login" className={styles.loginImg}/>
                <div className={styles.loginInput}>
                    <form>
                        <input id="name" type="text" placeholder="Nome"
                        onChange={(e) => [setName(e.target.value), setError('')]}  
                        className={styles.loginField}/> <br/>
                        <input id="adress" type="text" placeholder="Endereço"
                        onChange={(e) => [setAdress(e.target.value), setError('')]}  
                        className={styles.loginField}/> <br/>
                        <input id="phone" type="text" placeholder="Telefone"
                        onChange={(e) => [setPhone(e.target.value), setError('')]}  
                        className={styles.loginField}/> <br/>
                        <input id="email" type="email" placeholder="Email"
                        onChange={(e) => [setEmail(e.target.value), setError('')]}  
                        className={styles.loginField}/> <br/>
                        <input id="password" type="password" placeholder="Senha"
                        onChange={(e) => [setPassword(e.target.value), setError('')]} 
                        className={styles.loginField}/> <br/>
                        <input id="confirmPassword" type="password" placeholder="Confirmar senha"
                        onChange={(e) => [setConfirmPassword(e.target.value), setError('')]}
                        className={styles.loginField}/> <br/>
                        <p>{error}</p> <br/>
                        <button className={styles.btn} onClick={handleSignup}>Registrar</button><br/>
                    </form>
                    {/* redirecionamento para a pagina de login */}
                    <p><b>Já possui conta? Então faça o</b>&nbsp;
                        <Link to="/login">Login</Link>
                    </p>
                </div>
            </div>
            <div className={styles.space}></div>
        </div>
    );
}

export default FormsRegister;