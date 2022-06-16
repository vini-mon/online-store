import styles from './About.module.css'
import contact from '../../img/Contact.png'
import Button from '../Button'

function About() {
    return(
        <div className={styles.box}>
            <div className={styles.about}>
                <div className={styles.title}>
                    <h1>Sobre Nós</h1>
                </div>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus ultricies porta. 
                    In ullamcorper lacinia erat, eu vehicula erat. Aliquam ultrices varius nisl in rhoncus. 
                    Integer sapien massa, posuere convallis lectus non, egestas vestibulum metus. 
                    Curabitur accumsan ante a eleifend accumsan. Maecenas tincidunt ipsum non ullamcorper malesuada. 
                    Maecenas vel enim scelerisque, convallis sapien at, venenatis risus. 
                    Donec placerat vitae lorem in fermentum. Sed non lorem sit amet nisl lobortis accumsan.
                </p>
            </div>
            <div className={styles.box_contact}>
                <h2 className={styles.title}>Entre em contato conosco</h2>
                <div className={styles.contact}>
                    <img src={contact} alt="contact" className={styles.image}></img>
                    <div className={styles.forms}>
                        <input type="text" className={styles.field} name="user-name" placeholder="Nome: "/><br/>
                        <input type="email" className={styles.field} name="user-mail" placeholder="Email:"/><br/>
                        <input type="text" className={styles.field} name="user-phone" placeholder="Telefone:"/><br/>
                        <textarea className={styles.field} name="user-text" placeholder="Digite sua Mensagem:"></textarea><br/>
                        <Button text='Enviar'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About