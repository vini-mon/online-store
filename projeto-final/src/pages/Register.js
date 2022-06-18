import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import styles from './Forms.module.css';
import userIcon from '../img/account/login.png';
import useAuth from '../hooks/useAuth';


function FormsRegister(){

    // function Register(event){

    //     event.preventDefault();

    //     console.log(name);
    //     console.log(end);
    //     console.log(tel);
    //     console.log(nasc);
    //     console.log(email);
    //     console.log(password);
    //     console.log(confirmPassword);

    //     // WRITE IN A JSON FILE WITH THE USER DATA
    //     // const fs = require('fs');

    // }

    // const [name, setName] = useState();
    // const [end, setEnd] = useState();
    // const [tel, setTel] = useState();
    // const [nasc, setNasc] = useState();

    const { signup } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [error, setError] = useState();

    const handleSignup = (e) => {
        e.preventDefault()
        if (!email || !password || !confirmPassword) {
            setError('Preencha todos os campos')
            return
        } else if (password !== confirmPassword) {
            setError('As senhas não conferem')
            return
        }

        const res = signup(email, password);

        if (res) {
            setError(res)
            return
        }

        navigate('/login')
    }

    return(

        <div>
            
            <h2 className={styles.title}>Registre-se</h2>

            <div className={styles.loginBox}>

                <img src={userIcon} alt="Icone de Login" className={styles.loginImg}/>

                <div className={styles.loginInput}>

                    {/* <form onSubmit={Register}> */}
                    <form>

                        {/* <input id="name" type="text" placeholder="Nome completo"
                        onChange={(event)=>setName(event.target.value)}
                        className={styles.loginField} /> <br/>

                        <input id="end" type="text" placeholder="Endereço residencial"
                        onChange={(event)=>setEnd(event.target.value)} 
                        className={styles.loginField} /> <br/>

                        <input id="tel" type="text" placeholder="Telefone"
                        onChange={(event)=>setTel(event.target.value)} 
                        className={styles.loginField} /> <br/>

                        <input id="nasc" type="date" placeholder="Data de nascimento"
                        min="1920-01-01" max="2020-12-31"
                        onChange={(event)=>setNasc(event.target.value)} 
                        className={styles.loginField}/> <br/> */}

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

                    <p><b>Já possui conta? Então faça o</b>&nbsp;

                        <Link to="/login">
                            Login
                        </Link>

                    </p>

                </div>

            </div>

            <div className={styles.space}></div>

        </div>

    );

}

export default FormsRegister;