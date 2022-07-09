import styles from './Cart.module.css';
import CartProduct from '../components/CartProduct';
import { useNavigate } from 'react-router-dom'; 
import { useState, useEffect } from 'react';

import useAxios from "../hooks/useAxios";
import axios from "../api/axiosInstance";

function Confirm() {  
    const [products, error, loading] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: 'http://localhost:3500/product/',
        requestConfig: {

        }
    })

    // navegação para a página de pagamento
    const navigate = useNavigate();
    
    const payment = () => {
        navigate('/payment');
    }
    const back = () => {
        navigate('/cart');
    }

    return (
        <div>
            <p className={styles.breadcrumb}><span className={styles.green}>Carrinho</span> <i className="fa-solid fa-circle-right"></i> <span className={styles.green}>Resumo</span>   <i className="fa-solid fa-circle-right"></i> Pagamento</p>
            <h1 className={styles.title}>Confirme sua compra</h1>
            <div className={styles.box}>
                <button className={styles.btn} text="Pagar" onClick={payment}>Pagar</button>    
            </div>
            <button className={styles.btn} text="Voltar" onClick={back}>Voltar</button>    
        </div>
    )
}

export default Confirm