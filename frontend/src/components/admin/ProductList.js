import Product from './Product';
import products from '../../json/products.json';
import styles from './ProductList.module.css';

import React from 'react';
import Modal from 'react-modal';

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
};

Modal.setAppElement('body');

//componente que rederiza todos os produtos para edição no dashboard do admin
//milestone2: funções so produzem alertas
function ProductList() {

    let [modalId, setId] = useState(-1);
    let [modalValue, setValue] = useState("-");
    let [modalDescription, setD] = useState("-");
    let [modalStock, setStock] = useState(-1);
    let [modalPrice, setPrice] = useState(-1);
    let [modalSold, setSold] = useState(-1);

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

    function editProduct(id, name, description, stock, price, sold) {

        console.log(name);

        setId(id);
        setValue(name);
        setD(description);
        setStock(stock);
        setPrice(price);
        setSold(sold);

        openModal();

    }

    function removeProduct(id) {
        console.log("removendo produto: " + id);
    }

    function updateProduct(e){

        e.preventDefault(); 

    }

    return (
        <>

            {products.map((p, key) => {
                return (

                    <Product
                        key={key}
                        id={p.id}
                        name={p.name}
                        desc={p.description}
                        stock={p.qnt}
                        price={p.price}
                        sold={p.sold}
                        edit={() => editProduct(p.id, p.name, p.description, p.qnt, p.price, p.sold)}
                        remove={() => removeProduct(p.id)}
                        style={key}
                    />

                )
            })}

            <Modal
                isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal}
                style={customStyles} contentLabel="Example Modal"
            >

                <form className={styles.form}>

                    <label>Id</label>
                    <input readOnly className={styles.readOnly} type="text" defaultValue={modalId} /> <br />
                    <label>Nome</label>
                    <input type="text" defaultValue={modalValue} /> <br />
                    <label>Estoque</label>
                    <input type="number" step="1" defaultValue={modalStock} /> <br />
                    <label>Vendidos</label>
                    <input readOnly className={styles.readOnly} type="number" defaultValue={modalSold} /> <br />
                    <label>Preço</label>
                    <input type="number" step="0.01" defaultValue={modalPrice} /><br />
                    <label>Descrição</label>
                    <textarea type="text" defaultValue={modalDescription}></textarea>

                    <br/>

                    <div className={styles.inline}>
                        <button className={styles.submit} onClick={(e)=>updateProduct(e)}>Salvar mudanças</button>
                        <button className={styles.cancel} onClick={(e) => closeModal(e)}>Cancelar</button>
                    </div>

                </form>

            </Modal>

        </>
    )
}

export default ProductList