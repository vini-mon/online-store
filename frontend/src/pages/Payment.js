import styles from "./Payment.module.css"

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import useAxios from "../hooks/useAxios";
import axios from "../api/axiosInstance";

function Payment(){
    // que pega os produtos da localStorage
    let cartStorage = localStorage.getItem('ProductList');
    let cart = cartStorage ? JSON.parse(cartStorage) : {};
    let cartData = Object.entries(cart);

    const [products, err, loading] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: 'http://localhost:3500/product/',
        requestConfig: {

        }
    })

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
        navigate('/cart');
    }
    const modify = async(id, newQnt) =>{
        let oldQnt = -1;
        products.map((prod)=>{
            if (prod._id == id){
                oldQnt = prod.stock;
            }
        })

        await axios.put("http://localhost:3500/product/" + id, {
            "stock": oldQnt - newQnt,
            "sold": newQnt
        });
    }

    const ahead = (e) => {
        e.preventDefault();
        
        if (!cardNumber || !cardName || !cardExpiry || !cardCvv) {
            setError('Preencha todos os campos')
            return
        }

        
        for (let i = 0; i < cartData.length; i+=1){
            modify(cartData[i][0], cartData[i][1]);
        }
        
        localStorage.setItem('ProductList', JSON.stringify({}));
        alert("Pagamento realizado com sucesso!");
    }


    return (
        <div>
            <p className={styles.breadcrumb}><span className={styles.green} >Carrinho <i className="fa-solid fa-circle-right"></i> Pagamento</span></p>
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