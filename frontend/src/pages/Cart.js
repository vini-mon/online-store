import styles from './Cart.module.css';
import CartProduct from '../components/CartProduct';
import cartList from '../json/products.json';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Cart() {  

    // target usado para re-rederizar a o componente de cada produto
    // totalSoma usado para re-rederizar a o componente de cada produto
    const [target, setTarget] = useState({});
    const [totalSoma, setTotalSoma] = useState(0);

    // variável que auxilia no calculo do valor total da compra
    let total = 0;

    // que pega os produtos da localStorage
    const cartStorage = localStorage.getItem('ProductList');
    const cart = cartStorage ? JSON.parse(cartStorage) : {};
    
    // função que calcula o valor total da compra
    function calculateTotal(){

        for (let productId in cart) {
            total += parseInt(cart[productId] * cartList[productId-1].price);
            console.log("name", cartList[productId-1].name);
            console.log("qtd", cart[productId-1]);
            console.log("pri", cartList[productId-1].price);
            console.log(total);
            setTotalSoma(total);
        }

    }

    // ao iniciar a página, chama a função para calcular o valor total da compra
    if( totalSoma === 0 ){

        calculateTotal();

    }

    // navegação para a página de pagamento
    const navigate = useNavigate();
    
    const payment = () => {
        navigate('/payment');
    }

    // função que soma +1 na quantidade de um produto
    const handleAdd = (product) => {

        // para cada produto no JSON, verifica se o produto já está no carrinho
        for( let productId in cart ){

            // passa o valor para inteiro
            product = parseInt(product);
            productId = parseInt(productId);

            // se for o mesmo produto, soma +1 na quantidade
            if( productId === product ){

                // se a adição for menor que a quantidade no estoque
                if( cart[productId]+1 <= cartList[product-1].qnt ){

                    cart[productId] = parseInt(cart[productId]) + 1;
                
                    // salva o carrinho no localStorage
                    localStorage.setItem('ProductList', JSON.stringify(cart));

                    // re-renderiza o componente
                    setTarget(localStorage.getItem('ProductList'));

                    // recalcula o valor total da compra
                    calculateTotal();

                    return;

                }

            }

        }

        console.log("product not found");
    }

    // função que subtrai -1 na quantidade de um produto
    const handleRemove = (product) => {

        // para cada produto no JSON, verifica se o produto já está no carrinho
        for( let productId in cart ){

            // passa o valor para inteiro
            product = parseInt(product);
            productId = parseInt(productId);

            // se for o mesmo produto, subtrai -1 na quantidade
            if( productId === product ){

                // se a subtração for maior que 0
                if( cart[productId]-1 >= 0 ){

                    cart[productId] = parseInt(cart[productId]) - 1;

                    // se for o a ultima unidade no carrinho, remove o produto do localStorage
                    if(cart[productId] === 0){

                        delete cart[productId];

                    }

                    // salva o carrinho no localStorage
                    localStorage.setItem('ProductList', JSON.stringify(cart));
                    
                    // re-renderiza o componente
                    setTarget(localStorage.getItem('ProductList'));

                    // recalcula o valor total da compra
                    calculateTotal();

                    return;

                }

            }

        }
    }

    return (
        <div>
            <p className={styles.breadcrumb}><span className={styles.green}>Carrinho</span> <i className="fa-solid fa-circle-right"></i> Pagamento </p>
            <h1 className={styles.title}>Carrinho</h1>
            <div className={styles.box}>
                {Object.keys(cart).map(function(index, key) {
                    
                    return <CartProduct eventAdd={ () => handleAdd(index) } eventRemove={ () => handleRemove(index) } key={key} id={parseInt(index, 10)}/>

                })}
                <div className={styles.end}>
                    <span className={styles.total}> Total: R${totalSoma}.00 </span>
                    <button text="Finalizar Compra" className={styles.btn} onClick={payment}>Finalizar compra</button>
                </div>
            </div>
        </div>
    )
}

export default Cart