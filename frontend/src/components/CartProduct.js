import styles from './CartProduct.module.css'
import Button from './Button'

import { useState, useEffect } from 'react';
import useAxios from "../hooks/useAxios";
import axios from "../api/axiosInstance";

function CartProduct({ eventAdd, eventRemove, eventTarget, id}){
    let name = ""
    let qnt = -1
    let price = -1
    let source = ""
    let description = ""

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
            source = product.img
            description = product.description

        }
        return null;
    })

    return(
        <div className={styles.boxProduct}>
            <img src={source} alt={name} className={styles.img}></img>
            <div>
                <div>
                    <h2>{name}</h2> 
                    <span>R${price}.00</span>
                </div>
                <p>{description}</p>
                <div className={styles.add}>  
                    <Button text="-" event={eventRemove} eventTarget={eventTarget}></Button>    
                    <p style={{marginRight: "25px"}}>{qnt}</p>
                    <Button text="+" event={eventAdd} eventTarget={eventTarget}></Button>
                </div> 
                <p>Subtotal: R${qnt * price}</p>
            </div>  
            
        </div>
    )
}

export default CartProduct;