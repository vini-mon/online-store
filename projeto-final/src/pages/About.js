import { useState } from 'react';
import styles from './About.module.css'
import contact from '../img/Contact.png'

function About() {

    // Função para "enviar" email para contato

    function sendMail(event){

        event.preventDefault();
    
        console.log(nome);
        console.log(email);
        console.log(telefone);
        console.log(texto);

        // Reset dos values do formulário

        document.getElementById('nome').value = "";
        document.getElementById('email').value = "";
        document.getElementById('tel').value = "";
        document.getElementById('texto').value = "";

        // alerta de sucesso
    
        console.log("Mensagem enviada!");
        alert("Mensagem enviada!");
    
    }

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTel] = useState('')
    const [texto, setTexto] = useState('')

    return(

        <div className={styles.box}>

            <div className={styles.about}>

                <div className={styles.title}>

                    <h1>Sobre Nós</h1>

                </div>

                <p className={styles.aboutText}>

                    Somos apaixonados por pets! Essa não é apenas uma expressão inserida em nossa missão como empresa,
                    mas uma realidade vivenciada todos os dias em nossas atitudes, nas lojas e em todos os nossos
                    pontos de contato.
                    <br />
                    <br />
                    Trabalhamos para que você e seus pets tenham a melhor experiência em nossas lojas, seja através
                    dos serviços deestética e veterinária ou pela variedade de produtos espalhados nos mais diversos
                    mundos: cães, gatos, peixes, aves, roedores, répteis. Ah, mantemos nossas orelhas em pé para saber
                    das novidades do mundo pet e levá-las até você.

                </p>

            </div>

            <div className={styles.box_contact}>

                <h2 className={styles.title}>Entre em contato conosco</h2>

                <div className={styles.contact}>

                    <img src={contact} alt="contact" className={styles.image}></img>

                    <div className={styles.forms}>

                        <input id="nome" type="text" className={styles.field} name="user-name"
                        onChange={event => setNome(event.target.value)} placeholder="Nome"/><br/>

                        <input id="email" type="email" className={styles.field} name="user-mail"
                        onChange={event => setEmail(event.target.value)} placeholder="Email"/><br/>

                        <input id="tel" type="text" className={styles.field} name="user-phone"
                        onChange={event => setTel(event.target.value)} placeholder="Telefone"/><br/>

                        <textarea id="texto" className={styles.field} name="user-text"
                        onChange={event => setTexto(event.target.value)} placeholder="Digite sua Mensagem"></textarea><br/>

                        <button className={styles.btn} onClick={sendMail}>Enviar</button><br/>

                    </div>
                    
                </div>

            </div>

        </div>
    )
}

export default About