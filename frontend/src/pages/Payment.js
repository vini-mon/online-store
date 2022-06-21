import styles from "./Payment.module.css"

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Payment(){
    const navigate = useNavigate();

    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardExpiry, setCardExpiry] = useState('');
    const [cardCvv, setCardCvv] = useState('');
    const [error, setError] = useState('');

    const pay = () => {
        console.log("pay");
    }
    
    const cancel = () => {
        navigate('/cart');
    }

    const ahead = (e) => {
        e.preventDefault();
        
        if (!cardNumber || !cardName || !cardExpiry || !cardCvv) {
            setError('Preencha todos os campos')
            return
        }

        alert("Pagamento realizado com sucesso!");
    }


    return (
        <div>
            <p className={styles.breadcrumb}><span className={styles.green} >Carrinho <i class="fa-solid fa-circle-right"></i> Pagamento</span></p>
            <h1 className={styles.title}>Finalize seu Pedido</h1>
            <div className={styles.box}>
                <form onSubmit={pay}>
                    <div className={styles.form}>
                        <h3>Selecione o Detalhes de Pagamento:</h3>
                        <input id="card" type="text" placeholder="Número o cartão" className={styles.loginField}
                        onChange={(e) => [setCardNumber(e.target.value), setError('')]} /> <br/>

                        <input id="nome" type="text" placeholder="Nome do titular" className={styles.loginField}
                        onChange={(e) => [setCardName(e.target.value), setError('')]}/> <br/>

                        <input id="cdv" type="number" placeholder="Código de segurança" max="999" min="0" className={styles.loginField}
                        onChange={(e) => [setCardCvv(e.target.value), setError('')]} /> <br/>

                        <input id="date" type="text" placeholder="Data de validade" className={styles.loginField}
                        onChange={(e) => [setCardExpiry(e.target.value), setError('')]} /> <br/>

                        <p>{error}</p>
                        <button className={styles.btn} text="Finalizar" onClick={ahead}>Finalizar compra</button>
                    </div>
                </form>
                <button className={styles.btn} text="Voltar" onClick={cancel}>Voltar</button>
            </div>
        </div>
    );
};

export default Payment