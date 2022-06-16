import Product from '../Product';
import styles from './Products.module.css'
import image from '../../img/products/Products.png'
import product1 from '../../img/products/arranhador.png'
import product2 from '../../img/products/bolinha.png'
import product3 from '../../img/products/cama.png'
import product4 from '../../img/products/coleira.png'
import product5 from '../../img/products/oculos.jpg'
import product6 from '../../img/products/osso.png'
import product7 from '../../img/products/racao.png'

function Products() {
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
                    <Product source={product1}/>
                    <Product source={product2}/>
                    <Product source={product3}/>
                    <Product source={product4}/>
                    <Product source={product5}/>
                    <Product source={product6}/>
                    <Product source={product7}/>
                </div>
            </div>
        </div>  
    )
    
}

export default Products