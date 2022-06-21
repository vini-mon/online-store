import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import styles from './Forms.module.css';
import userIcon from '../img/account/login.png';

// função que comanda ações da página de usuário
// return: HTML com form para alterar informacoes do usuarios
function UserAccount() {
    //requisita funções do hook
    const { signout, getInfo, updateInfo } = useAuth();
    const email = useAuth();
    const navigate = useNavigate();

    //recupera valor de email
    let info = getInfo(email.email);

    //variaveis dinamicas com armazenam auterações nos dados dos usuários
    const [name, setName] = useState(info.name);
    const [adress, setAdress] = useState(info.adress);
    const [phone, setPhone] = useState(info.phone);
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [error, setError] = useState();

    //função que realiza a atualização dos dados do usuário
    //acionada ao clica no botão "Salvar Alterações"
    const handleUpdate = (e) => {
        e.preventDefault();

        //validaçoes
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

        //atualização no localestorage
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
                        {/* redirecionamento para a pagina inicial e saida da conta */}
                        <button className={styles.btn} onClick={() => [signout(), navigate('/')]}>Sair da conta</button><br/>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default UserAccount