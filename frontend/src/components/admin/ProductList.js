import Product from './Product';
import styles from './ProductList.module.css';

import Modal from 'react-modal';

import axios from "../../api/axiosInstance";
import { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

function ProductList() {
    const [updated, setUpdated] = useState(false);
    const [products, setProducts] = useState([]);

    const [modalValue, setValue] = useState("-");
    const [modalDescription, setD] = useState("-");
    const [modalStock, setStock] = useState(-1);
    const [modalPrice, setPrice] = useState(-1);
    const [modalSold, setSold] = useState(-1);
    const [modalImg, setImg] = useState("");
    const [modalSrc, setSrc] = useState("");
    const [id, setId] = useState(-1);

    const [didClickButton, setDidClickButton] = useState(false);

    const [modalIsOpen, setIsOpen] = useState(false);

    //requisicao dos produtos todas as vez que o componente eh recarregado
    useEffect(() => {
        async function getProductList() {
            try {
                const res = await axios.get('http://localhost:3500/product/admin');
                setProducts(res.data);
            } catch (e) {
                console.log(e);
            }
        }

        getProductList();
    }, [updated]);

    //criacao dos toasts e testagem
    const notify = (msg) => toast(msg, toastConfig);
    const notifyInfo = (msg) => toast.info(msg, toastConfig);
    const notifyInfoI = (id) => {
        let msg = "-";
        switch (id) {
            case 0:
                msg = "Nome descritivo do produto.";
                break;
            case 1:
                msg = "Estoque do produto dispon??vel no sistema.";
                break;
            case 2:
                msg = "Quantidade dos produtos vendidos ?? calculado automaticamente.";
                break;
            case 3:
                msg = "Pre??o do produto deve ser inserido usando virgula como separador de casas decimais.";
                break;
            case 4:
                msg = "A imagem do produto deve ser um arquivo de imagem com link p??blico na internet. Recomenda-se a utiliza????o do AWS S3. (Deixar vazio caso n??o queira imagem).";
                break;
            case 5:
                msg = "O ??udio do produto deve ser um arquivo de ??udio com link p??blico na internet. Recomenda-se a utiliza????o do AWS S3. (Deixar vazio caso n??o queira ??udio).";
                break;
            case 6:
                msg = "Descri????o completa e detalhada sobre o produto.";
                break;
            default:
                break;
        }
        toast.info(msg, toastConfigInfo)
    };
    const toastConfig = {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    }
    const toastConfigInfo = {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    }

    //criacao dos pop-ups
    function openModal() {
        setIsOpen(true);
    }
    function closeModal(e) {
        e.preventDefault();
        setIsOpen(false);
    }

    //alteracao das variaveis em relacao a escrita no popup
    function handleChange(e) {
        if (e.target.id === "0") setValue(e.target.value);
        if (e.target.id === "1") setStock(e.target.value);
        if (e.target.id === "2") setSold(e.target.value);
        if (e.target.id === "3") setPrice(e.target.value);
        if (e.target.id === "4") setImg(e.target.value);
        if (e.target.id === "5") setSrc(e.target.value);
        if (e.target.id === "6") setD(e.target.value);
    }

    //evento de alterar os valores dos produtos
    function editProduct(id, name, description, stock, price, sold, img, src) {
        setValue(name);
        setD(description);
        setStock(stock);
        setPrice(price);
        setSold(sold);
        setImg(img);
        setSrc(src);
        setId(id);

        openModal();
    }

    //evento de remover um produto
    function removeProduct(productId) {
        async function deleteProduct(productId) {
            try {
                await axios.delete('http://localhost:3500/product/' + productId);
                setUpdated(true);
            } catch (e) {
                console.log(e);
            }
        }

        deleteProduct(productId);

        notifyInfo("Produto removido com sucesso!");

        setUpdated(false)
    }

    //envia para o banco de dados toda vez q o ha uma alteracao
    useEffect(() => {
        async function updateRequest() {
            try {
                await axios.put('http://localhost:3500/product/' + id, {
                    name: modalValue,
                    description: modalDescription,
                    price: modalPrice,
                    stock: modalStock,
                    img: modalImg,
                    sound: modalSrc
                });
            } catch(e) {}
        }

        if (didClickButton) {
            updateRequest();
            setUpdated(true)
        }

        setDidClickButton(false);

    }, [didClickButton]);

    //funcao para salvar as alteracoes
    function updateProduct(e) {
        e.preventDefault();

        notify("Produto atualizado com sucesso!");

        setDidClickButton(true);
        setIsOpen(false);
        setUpdated(false);
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
                isOpen={modalIsOpen} onRequestClose={closeModal}
                style={customStyles} contentLabel="Example Modal"
            >

                <form className={styles.form}>

                    <h1>Alterar produto</h1>

                    <div className={styles.in}>
                        <label>Nome</label>
                        <div>
                            <input type="text" placeholder="Bolinha com sino" onChange={handleChange} id="0" value={modalValue} />
                            <i onClick={ () => notifyInfoI(0) } className="fa-solid fa-circle-info"></i>
                        </div>
                    </div>
                    <div className={styles.in}>
                        <label>Estoque</label>
                        <div>
                            <input type="number" min="0" placeholder="15" onChange={handleChange} id="1" step="1" value={modalStock} />
                            <i onClick={ () => notifyInfoI(1) } className="fa-solid fa-circle-info"></i>
                        </div>
                    </div>
                    <div className={styles.in}>
                        <label>Vendidos</label>
                        <div>
                            <input readOnly placeholder="N/A" onChange={handleChange} id="2" className={styles.readOnly} type="number" value={modalSold} />
                            <i onClick={ () => notifyInfoI(2) } className="fa-solid fa-circle-info"></i>
                        </div>
                    </div>
                    <div className={styles.in}>
                        <label>Pre??o</label>
                        <div>
                            <input type="number" placeholder="15,00" min="0.10" onChange={handleChange} id="3" step="0.10" value={modalPrice} />
                            <i onClick={ () => notifyInfoI(3) } className="fa-solid fa-circle-info"></i>
                        </div>
                    </div>
                    <div className={styles.in}>
                        <label>Imagem</label>
                        <div>
                            <input type="text" placeholder="URL p??blico aws s3" onChange={handleChange} id="4" value={modalImg} />
                            <i onClick={ () => notifyInfoI(4) } className="fa-solid fa-circle-info"></i>
                        </div>
                    </div>
                    <div className={styles.in}>
                        <label>Som</label>
                        <div>
                            <input type="text" placeholder="URL p??blico aws s3" onChange={handleChange} id="5" value={modalSrc} />
                            <i onClick={ () => notifyInfoI(5) } className="fa-solid fa-circle-info"></i>
                        </div>
                    </div>
                    <div className={styles.in}>
                        <label>Descri????o</label>
                        <div>
                            <textarea type="text" placeholder="Uma descri????o detalhada do produto" onChange={handleChange} id="6" value={modalDescription}></textarea>
                            <i onClick={ () => notifyInfoI(6) } className="fa-solid fa-circle-info"></i>
                        </div>
                    </div>
                    
                    <br/>

                    <div className={styles.inline}>
                        <input type="submit" className={styles.submit} onClick={(e)=>updateProduct(e)} value="Salvar mudan??as" />
                        <button className={styles.cancel} onClick={(e) => closeModal(e)}>Cancelar</button>
                    </div>

                </form>

            </Modal>
        </>
    )
}

export default ProductList