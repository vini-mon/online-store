import styles from './Cart.module.css';
import CartProduct from '../components/CartProduct';
import { useNavigate } from 'react-router-dom'; 
import { useState, useEffect } from 'react';

import useAxios from "../hooks/useAxios";
import axios from "../api/axiosInstance";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart() {  
    /**
     * Requisição para obter os produtos do carrinho
     */

    const [products, error, loading] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: 'http://localhost:3500/product/',
        requestConfig: {

        }
    })
    
    /**
     * Funcão de configuração de layout do componente toast de sucesso
     */
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

    /**
     * Função de notificação que chama o componente toast de erro
     */
    const notifyError = (msg) => toast.error(msg, toastConfig);

    const navigate = useNavigate();
    // target usado para re-rederizar a o componente de cada produto
    // totalSoma usado para re-rederizar o componente de cada produto
    const [target, setTarget] = useState({});
    let [totalSoma, setTotalSoma] = useState(-1);
    
    // variável que auxilia no calculo do valor total da compra
    let total = 0;
    
    let user = JSON.parse(localStorage.getItem('token'));

    // que pega os produtos da localStorage
    let cartStorage = localStorage.getItem('ProductList');
    let cart = cartStorage ? JSON.parse(cartStorage) : {};
    
    // função que calcula o valor total da compra
    function calculateTotal() {
        setTotalSoma(0);
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

    /**
     * UseEffect que chama a função de calculo do valor total da compra
     */
    useEffect(() => {
        calculateTotal();
    })

    const payment = () => {
        /**
         * Caso o carrinho esteja vazio, exibe um toast de erro
         */
        if (!cartStorage || cartStorage === '{}' || total === 0){
            notifyError("Carrinho Vazio!");
            return;
        }
        /**
         * Caso o usuário não esteja logado, exibe um toast de erro
         */
        if (!user){
            notifyError("Faça login ou cadastre um novo usuário!");
            navigate('/login');
            return;
        }
        navigate('/confirm');
    }

    // função que soma +1 na quantidade de um produto
    const handleAdd = (product) => {
        let cartData = Object.entries(cart);
        let stock;
        for (let i = 0; i < products.length; i += 1) {
            if (products[i]._id === product){
                stock = products[i].stock;
            }
        }
        for (let i = 0; i < cartData.length; i += 1) {
            if (product === cartData[i][0]){
                if( cartData[i][1] + 1 <= stock){
                    cartData[i][1] = cartData[i][1] + 1;
                    // salva o carrinho no localStorage
                    localStorage.setItem('ProductList', JSON.stringify(Object.fromEntries(cartData)));
                    // re-renderiza o componente
                    setTarget(localStorage.getItem('ProductList'));
                    // recalcula o valor total da compra
                    calculateTotal();
        
                    return;
                }
            }
        }
    }

    // função que subtrai -1 na quantidade de um produto
    const handleRemove = (product) => {
        let cartData = Object.entries(cart);
        for (let i = 0; i < cartData.length; i += 1) {
            if (product === cartData[i][0]){
                if( cartData[i][1] - 1 >= 0){
                    cartData[i][1] = cartData[i][1] - 1;
                    // salva o carrinho no localStorage
                    localStorage.setItem('ProductList', JSON.stringify(Object.fromEntries(cartData)));
                    // re-renderiza o componente
                    setTarget(localStorage.getItem('ProductList'));
                    // recalcula o valor total da compra
                    calculateTotal();
        
                    return;
                }
            }
        }
    }

    return (
        <div>
            <p className={styles.breadcrumb}><span className={styles.green}> Carrinho </span> <i className="fa-solid fa-circle-right"></i> Resumo <i className="fa-solid fa-circle-right"></i> Pagamento </p>
            <h1 className={styles.title}>Carrinho</h1>
            <div className={styles.box}>
                { /**
                 * Função que exibe uma lista com os produtos no carrinho
                 */ }
                {Object.keys(cart).map((index, key) => {
                    return <CartProduct 
                        eventAdd={ () => handleAdd(index) } 
                        eventRemove={ () => handleRemove(index) } 
                        key={key} 
                        id={index}
                    />
                })}
                <div className={styles.end}>
                    <span className={styles.total}> Total: R${totalSoma.toFixed(2)} </span>
                    <button text="Finalizar Compra" className={styles.btn} onClick={payment}>Finalizar compra</button>
                </div>
            </div>
        </div>
    )
}

export default Cart