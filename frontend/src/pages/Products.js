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

    const [products, error, loading] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: 'http://localhost:3500/product/',
        requestConfig: {

        }
    })

    const notify = () => toast('Produto adicionado ao carrinho!', {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    const stylesToast = {

        backgroundColor: '#fbc2eb',
        boxShadow: '0 0 50px 1px #f296d8',
        border: '1px solid #f296d8',
        color: '#9d52f9',

    }

    let cartList = JSON.parse(localStorage.getItem('ProductList'));

    const handleClick = (id) => {

        notify();

        if (cartList === null) cartList = {};
        
        cartList[id] = cartList[id] ? cartList[id] + 1 : 1;
        localStorage.setItem('ProductList', JSON.stringify(cartList))

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
                            source={product.img}
                            sound={product.sound}
                            key={product._id} 
                            event={handleClick} 
                            eventTarget={product._id}
                        />   
                    ))}
                </div>
            </div>
        </div>  
    )
}

export default Products