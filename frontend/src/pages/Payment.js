import styles from "./Payment.module.css"

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import useAxios from "../hooks/useAxios";
import axios from "../api/axiosInstance";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Payment(){
    // que pega info do localStorage
    let cartStorage = localStorage.getItem('ProductList');
    let cart = cartStorage ? JSON.parse(cartStorage) : {};
    let cartData = Object.entries(cart);
    let user = localStorage.getItem('token');
    let userId = user._id;
    console.log(userId);

    // const [users, err, loading] = useAxios({
    //     axiosInstance: axios,
    //     method: 'GET',
    //     url: 'http://localhost:3500/product/',
    //     requestConfig: {
    //     }
    // })

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
    const notify = (msg) => toast(msg, toastConfig);
    const notifyError = (msg) => toast.error(msg, toastConfig);
    const stylesToast = {
        backgroundColor: '#fbc2eb',
        border: '2px solid #d2bdff',
        borderRadius: '5px',
        color: 'black',
        textAlign: 'center',
    }

    const navigate = useNavigate();

    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardExpiry, setCardExpiry] = useState('');
    const [cardCvv, setCardCvv] = useState('');
    const [error, setError] = useState('');

    const pay = () => {
        console.log("pay");
    }
    
    const cancel = () => {
        navigate('/confirm');
    }

    const ahead = (e) => {
        e.preventDefault();
        
        if (!cardNumber || !cardName || !cardExpiry || !cardCvv) {
            setError('Preencha todos os campos');
            return;
        }

        let output = [];
        console.log(cartData.length)
        for (let i = 0; i < cartData.length; i+=1){
            const target = {"quantity":cartData[i][1], "product":cartData[i][0]};
            output.push(target);
        }
        localStorage.setItem('ProductList', JSON.stringify({}));

        axios.post("http://localhost:3500/older", {

        })

        notify("Pagamento realizado com sucesso!");
        navigate('/');
    }


    return (
        <div>
            <p className={styles.breadcrumb}><span className={styles.green} >Carrinho  <i className="fa-solid fa-circle-right"></i> Resumo  <i className="fa-solid fa-circle-right"></i>Pagamento</span></p>
            <h1 className={styles.title}>Finalize seu Pedido</h1>
            <div className={styles.box}>
                <form onSubmit={pay}>
                    <div className={styles.form}>
                        <h3>Selecione o Detalhes de Pagamento:</h3>
                        <input id="card" type="text" placeholder="Número o cartão" className={styles.loginField}
                        onChange={(e) => [setCardNumber(e.target.value), setError('')]} /> <br/>

                        <input id="nome" type="text" placeholder="Nome do titular" className={styles.loginField}
                        onChange={(e) => [setCardName(e.target.value), setError('')]}/> <br/>

                        <input id="cdv" type="number" placeholder="Código de segurança" max="999" min="0" className={styles.loginField}
                        onChange={(e) => [setCardCvv(e.target.value), setError('')]} /> <br/>

                        <input id="date" type="text" placeholder="Data de validade" className={styles.loginField}
                        onChange={(e) => [setCardExpiry(e.target.value), setError('')]} /> <br/>

                        <p>{error}</p>
                        <button className={styles.btn} text="Finalizar" onClick={ahead}>Finalizar compra</button>
                    </div>
                </form>
                <button className={styles.btn} text="Voltar" onClick={cancel}>Voltar</button>
            </div>
        </div>
    );
};

export default Payment