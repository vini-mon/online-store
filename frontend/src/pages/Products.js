import Product from '../components/Product';
import styles from './Products.module.css';

import capa from '../img/products/Products.png';

import useAxios from "../hooks/useAxios";
import axios from "../api/axiosInstance";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// função que comanda as ações da paginas de produtos
// realiza a adição de produtos ao carrinho (armazenamento no localstorage)
// return: HTML da pagina de Products
function Products() {
    //requisicao dos dados de produtos do bd
    const [products, error, loading] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: 'http://localhost:3500/product/',
        requestConfig: {}
    })

    //configuracoes para o toast
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

    //recupera os dados do carrinho
    let cartList = JSON.parse(localStorage.getItem('ProductList'));

    //evento de adicao de produto ao carrinho
    const handleClick = (id, stock) => {
        //tratamento dos dados caso o carrinho esteja vazio
        if (cartList === null) cartList = {};

        //verificacao de quantidade para adicao e adicao ao carrinho
        if (cartList[id] >= stock){
            notifyError('Estoque insuficiente!');
        }
        else{
            cartList[id] = cartList[id] ? cartList[id] + 1 : 1;
            localStorage.setItem('ProductList', JSON.stringify(cartList))
            notify('Produto adicionado ao carrinho!');
        }
    }
    
    return (
        <div>
            <div><ToastContainer toastStyle={stylesToast} pauseOnFocusLoss={false} /></div>
            <div className={styles.intro}>
                <div className={styles.text}>
                    <h1>Conheça nossos produtos<br/>para seu PET</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            
                </div>
                <img src={capa} alt='capa' width="350"></img>
            </div>

            <div className={styles.box}>
                <h2 className={styles.title}>Nossos Produtos</h2>
                <div className={styles.display}>
                    {/* Percorre o json adicionando cada produto em um componente */}
                    {products.map((product) => (    
                        <Product 
                            name={product.name} 
                            price={product.price} 
                            qnt = {product.stock}
                            description = {product.description}
                            source={product.img}
                            sound={product.sound}
                            key={product._id} 
                            event={() => handleClick(product._id, product.stock)} 
                        />   
                    ))}
                </div>
            </div>
        </div>  
    )
}

export default Products