import Product from '../components/Product';
import styles from './Products.module.css';
import productData from '../json/products.json';

import { useState } from 'react';

import capa from '../img/products/Products.png';

function Products() {
    const [cartProduct, setCart] = useState();

    const handleClick = (product) => {
        setCart(product);
        console.log(cartProduct)
    }
    
    return(
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
                    {productData.map((product) => ( 
                        // <div>
                        //     <p>{"%PUBLIC_URL%"+product.img}</p>   
                        //     <img src={product.img}></img>
                        // </div>
                                       
                        <Product 
                            name={product.name} 
                            price={product.price} 
                            qnt = {product.qnt}
                            source={product.img} 
                            key={product.id} 
                            event={handleClick} 
                            eventTarget={product}
                        />                        
                    ))}
                </div>
            </div>
        </div>  
    )
    
}

export default Products