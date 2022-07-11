import styles from './Confirm.module.css';
import { useNavigate } from 'react-router-dom'; 
import ConfirmProduct from '../components/ConfirmProduct';
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
    
    const cartStorage = localStorage.getItem('ProductList');
    const cart = cartStorage ? JSON.parse(cartStorage) : {};

    let total = 0;
    let [totalSoma, setTotalSoma] = useState(-1);
    function calculateTotal(){
        products.map((prod)=>{
            let cartValues = Object.values(cart);
            let cartId = Object.keys(cart);
            for (let i = 0; i < cartValues.length; i+=1) {
                if (prod._id === cartId[i]){
                    total += cartValues[i] * prod.price;
                    setTotalSoma(total);
                }
            }
        })
    }

    useEffect(() => {
        calculateTotal();
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
            <p className={styles.breadcrumb}><span className={styles.green}>Carrinho</span> <i className="fa-solid fa-circle-right"></i> <span className={styles.green}> Resumo </span>   <i className="fa-solid fa-circle-right"></i> Pagamento </p>
            <div className={styles.conteiner}>
                <h2 className={styles.title}>Confirme sua compra</h2>
                <div className={styles.box}>
                    <div className={styles.cabecalho}>
                        <div className={styles.product}> <h3>Produto</h3> </div> 
                        <div className={styles.price}> <h3>Preço</h3> </div> 
                        <div className={styles.qnt}> <h3>Quantidade</h3> </div> 
                        <div className={styles.subtotal}> <h3>Subtotal</h3> </div> 
                    </div>
                    <div className={styles.itens}>
                        {Object.keys(cart).map((index, key) => {
                        return <ConfirmProduct 
                            key={key} 
                            id={index}
                        />
                        })}
                    </div>
                    
                    <div className={styles.info}>
                        <p>Frete: Grátis</p>
                        <p>Total: R${totalSoma.toFixed(2)}</p>
                    </div>
                    <button className={styles.btn} text="Pagar" onClick={payment}>Pagar</button>    
                </div>
                <button className={styles.btn} text="Retornar" onClick={back}>Retornar ao Carrinho</button>    
            </div>
        </div>
    )
}

export default Confirm