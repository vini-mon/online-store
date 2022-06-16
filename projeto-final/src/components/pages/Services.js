import Service from '../Service'
import styles from './Services.module.css'
import capa from '../../img/services/Tosacapa.png'
import service1 from '../../img/services/hidratacao.png'
import service2 from '../../img/services/higienica.png'
import service3 from '../../img/services/tosa.png'
import service4 from '../../img/services/vacinacao.png'

function Services() {
    return(
        <div>
            <div className={styles.intro}>
                <div className={styles.text}>
                    <h1>Conheça nossos serviços <br/>para seu PET</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <img src={capa} alt='imagem' width="350"></img>
            </div>
            <div className={styles.box}>
                <h2 className={styles.title}>Nossos Serviços</h2>
                <div className={styles.display}>
                    <Service source={service1}/>
                    <Service source={service2}/>
                    <Service source={service3}/>
                    <Service source={service4}/>
                    <Service/>
                </div>
            </div>
        </div>  
    )
    
}

export default Services