import { Link } from 'react-router-dom';
import { useState } from "react";
import styles from './Forms.module.css';
import userIcon from '../img/account/login.png';
import userData from "../json/users.json";

function FormsLogin(){

    function Login(event){

        event.preventDefault();

        {
            userData && userData.map(user => {

                if(user.email === email && user.password === password){

                    console.log("Login Successful");

                    // SET A SESSION WITH A GLOBAL VARIABLE



                }

            });
        }

    }

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return(

        <div>

            <h2 className={styles.title}>Faça login</h2>

            <div className={styles.loginBox}>

                <img src={userIcon} alt="Icone de Login" className={styles.loginImg}/>

                <div className={styles.loginInput}>

                    <form onSubmit={Login}>

                        <input id="email" type="email" placeholder="E-mail"
                        onChange={(event)=>setEmail(event.target.value)}
                        className={styles.loginField} required /> <br/>

                        <input id="password" type="password" placeholder="Senha"
                        onChange={(event)=>setPassword(event.target.value)}
                        className={styles.loginField} required  /> <br/>

                        <button className={styles.btn}>Login</button><br/>

                    </form>

                    <p><b>Não possui conta?</b>&nbsp;

                        <Link to="/register">
                            Registre-se
                        </Link>

                    </p>

                </div>

            </div>

            <div className={styles.space}></div>

        </div>

    );

}

export default FormsLogin;