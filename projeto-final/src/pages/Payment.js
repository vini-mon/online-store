import styles from "./Payment.module.css"
import cartList from '../json/cart';

import { useNavigate } from 'react-router-dom';

function Payment(){
    let total = 0;
    console.log(total);
    cartList.map(product => {
        total += product.qnt * product.price;
        return null;
    });

    const pay = () => {
        console.log("pay");
    }
    

    const navigate = useNavigate();
    const cancel = () => {
        navigate('/cart');
    }
    const ahead = (e) => {
        e.preventDefault();
        alert("Pagamento realizado com sucesso!");
    }


    return(

        <div>

            <p className={styles.breadcrumb}><span className={styles.green} >Carrinho <i class="fa-solid fa-circle-right"></i> Pagamento</span></p>

            <h1 className={styles.title}>Finalize seu Pedido</h1>

            <div className={styles.box}>

                <form onSubmit={pay}>

                    <div className={styles.form}>

                        <h3>Selecione o Detalhes de Pagamento:</h3>
                        <input id="card" type="text" placeholder="Número o cartão" className={styles.loginField} required /> <br/>
                        <input id="nome" type="text" placeholder="Nome do titular" className={styles.loginField} required /> <br/>
                        <input id="cdv" type="number" placeholder="Código de segurança" max="999" className={styles.loginField} required /> <br/>
                        <input id="date" type="text" placeholder="Data de validade" className={styles.loginField} required /> <br/>
                        <button className={styles.btn} text="Finalizar" onClick={ahead}>Finalizar compra</button>

                    </div>

                </form>

                <button className={styles.btn} text="Voltar" onClick={cancel}>Voltar</button>

            </div>

        </div>

        
    );
};

export default Payment