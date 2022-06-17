import Product from '../components/Product';
import styles from './Products.module.css';
import productList from '../components/productList';

import { useState } from 'react';

import image from '../img/products/Products.png';

function Products() {
    const [cart, setCart] = useState();

    const handleClick = (product) => {
        setCart(product);
        console.log(cart)
    }
    
    return(
        <div>
            <div className={styles.intro}>
                <div className={styles.text}>
                    <h1>Conheça nossos produtos<br/>para seu PET</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <img src={image} alt='imagem' width="350"></img>
            </div>
            <div className={styles.box}>
                <h2 className={styles.title}>Nossos Produtos</h2>
                <div className={styles.display}>
                    {productList.map((product) => (
                        <Product 
                            name={product.name} 
                            price={product.price} 
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