import Product from '../Product';
import styles from './Products.module.css'

function Products() {
    return(
        <div className={styles.box}>
            <h2>Nossos Produtos</h2>
            <div className={styles.display}>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>  
    )
    
}

export default Products