import Product from './Product';
import styles from './ProductList.module.css';

import React from 'react';
import Modal from 'react-modal';


import useAxios from "../../hooks/useAxios";
import axios from "../../api/axiosInstance";
import { useState } from 'react';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '15px',
        border: '1px solid #ff8ae2',
        borderRadius: '20px',
        color: 'black',
        boxShadow: '0 0 1em #ff8ae2',
    },
    overlay: {
    }
};

Modal.setAppElement('body');

//componente que rederiza todos os produtos para edição no dashboard do admin
//milestone2: funções so produzem alertas
function ProductList() {
    const [products, error, loading] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        // url: 'http://localhost:3500/product/admin',
        url: 'http://localhost:3500/product/',
        requestConfig: {

        }
    })
    
    // let [modalId, setId] = useState(-1);
    let [modalValue, setValue] = useState("-");
    let [modalDescription, setD] = useState("-");
    let [modalStock, setStock] = useState(-1);
    let [modalPrice, setPrice] = useState(-1);
    let [modalSold, setSold] = useState(-1);
    let [modalImg, setImg] = useState("");
    let [modalSrc, setSrc] = useState("");

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    
    }

    function closeModal(e) {

        e.preventDefault();
        setIsOpen(false);

    }

    function handleChange(e){
        if (e.target.id === "0"){
            setValue(e.target.value);
        }
        if (e.target.id === "1"){
            setStock(e.target.value);
        }
        if (e.target.id === "2"){
            setSold(e.target.value);
        }
        if (e.target.id === "3"){
            setPrice(e.target.value);
        }
        if (e.target.id === "4"){
            setImg(e.target.value);
        }
        if (e.target.id === "5"){
            setSrc(e.target.value);
        }
        if (e.target.id === "6"){
            setD(e.target.value);
        }
    }

    function editProduct(id, name, description, stock, price, sold, img, src) {
        setValue(name);
        setD(description);
        setStock(stock);
        setPrice(price);
        setSold(sold);
        setImg(img);
        setSrc(src);

        openModal();
    }

    function removeProduct(id) {
        console.log("removendo produto: " + id);
    }

    function updateProduct(e){
        console.log(modalValue);
        console.log(modalDescription);
        console.log(modalStock);
        console.log(modalPrice);
        console.log(modalSold);
        console.log(modalImg);
        console.log(modalSrc);
        e.preventDefault();
    }

    return (
        <>
            {products.map((p, key) => {
                return (
                    <Product
                        key={key}
                        id={p._id}
                        name={p.name}
                        desc={p.description}
                        stock={p.stock}
                        price={p.price}
                        sold={p.sold}
                        edit={() => editProduct(p._id, p.name, p.description, p.stock, p.price, p.sold, p.img, p.sound)}
                        remove={() => removeProduct(p._id)}
                        style={key}
                    />
                )
            })}
            
            <Modal
                isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal}
                style={customStyles} contentLabel="Example Modal"
            >

                <form className={styles.form}>
                    <div className={styles.in}>
                        <label>Nome</label>
                        <input type="text" onChange={handleChange} id="0" value={modalValue} />
                    </div>
                    <div className={styles.in}>
                        <label>Estoque</label>
                        <input type="number" onChange={handleChange} id="1" step="1" value={modalStock} />
                    </div>
                    <div className={styles.in}>
                        <label>Vendidos</label>
                        <input readOnly onChange={handleChange} id="2" className={styles.readOnly} type="number" value={modalSold} />
                    </div>
                    <div className={styles.in}>
                        <label>Preço</label>
                        <input type="number" onChange={handleChange} id="3" step="0.01" value={modalPrice} />
                    </div>
                    <div className={styles.in}>
                        <label>Imagem</label>
                        <input type="text" onChange={handleChange} id="4" step="0.01" value={modalImg} />
                    </div>
                    <div className={styles.in}>
                        <label>Som</label>
                        <input type="text" onChange={handleChange} id="5" step="0.01" value={modalSrc} />
                    </div>
                    <div className={styles.in}>
                        <label>Descrição</label>
                        <textarea type="text" onChange={handleChange} id="6" value={modalDescription}></textarea>
                    </div>
                    
                    <br/>

                    <div className={styles.inline}>
                        <input type="submit" className={styles.submit} onClick={(e)=>updateProduct(e)} value="Salvar mudanças" />
                        <button className={styles.cancel} onClick={(e) => closeModal(e)}>Cancelar</button>
                    </div>

                </form>

            </Modal>
        </>
    )
}

export default ProductList