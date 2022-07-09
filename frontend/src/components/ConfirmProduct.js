import styles from './ConfirmProduct.module.css'
import Button from './Button'

import { useState, useEffect } from 'react';
import useAxios from "../hooks/useAxios";
import axios from "../api/axiosInstance";

function CartProduct({id}){
    let name = ""
    let qnt = -1
    let price = -1

    // pega o produto do localStorage
    const cartStorage = localStorage.getItem('ProductList');
    const cart = cartStorage ? JSON.parse(cartStorage) : {};

    // pega o produto do banco
    const [products, error, loading] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: 'http://localhost:3500/product/',
        requestConfig: {

        }
    })
    products.map( product => {
        // se o produto do json for o mesmo do localStorage, pega os dados
        if(product._id === id){
            for (let productId in cart) {
                if(productId === id ){
                    qnt = cart[productId]
                }
            }

            name = product.name
            price = product.price
        }
        return null;
    })

    return(
        <div className={styles.boxProduct}>
            <div className={styles.name}>
                <p>{name}</p> 
            </div>
            <div className={styles.price}>
                <p>R${price}</p>
            </div>
            <div className={styles.qnt}>  
                <p>{qnt}</p>
            </div> 
            <div className={styles.subtotal}>  
                <p>R${qnt * price}.00</p> 
            </div> 
        </div>
    )
}

export default CartProduct;