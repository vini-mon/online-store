import Product from '../components/Product';
import styles from './Products.module.css';
import productData from '../json/products.json';

import capa from '../img/products/Products.png';

import axios from 'axios'

let products = [];

const getProducts = async () => {
    let promise = await axios.get("product/");
    let productData = await promise.data;
    let i = 0;
    productData.forEach((product) => {
        products[i] = product;
        i += 1;
    });
} 
getProducts();
console.log(products);

// função que comanda as ações da paginas de produtos
// realiza a adição de produtos ao carrinho (armazenamento no localstorage)
// return: HTML da pagina de Products
function Products() {
    let cartList = JSON.parse(localStorage.getItem('ProductList'));

    // Adiciona no ProductList do localStorage o id do produto e a quantidade
    // Essa ProductList será utilizada como carrinho
    const handleClick = (id) => {
        if (cartList === null) cartList = {};
        
        cartList[id] = cartList[id] ? cartList[id] + 1 : 1;
        localStorage.setItem('ProductList', JSON.stringify(cartList))
    }
    
    return (
        <div>
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
                    {productData.map((product) => (    
                        <Product 
                            name={product.name} 
                            price={product.price} 
                            qnt = {product.qnt}
                            source={product.img}
                            sound={product.sound}
                            key={product.id} 
                            event={handleClick} 
                            eventTarget={product.id}
                        />   
                    ))}
                </div>
            </div>
        </div>  
    )
}

export default Products