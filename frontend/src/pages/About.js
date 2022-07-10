import styles from './About.module.css'

import imgG from '../img/people/gabriel.jpg'
import imgJ from '../img/people/joao.jpg'
import imgV from '../img/people/vinicius.jpeg'

function About() {

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

            <div className={styles.people}>

                <h2 className={styles.title}>Desenvolvedores</h2>

                <div className={styles.row}>

                    <div className={styles.col3}>
                        <img src={imgG} />
                        <h4>Gabriel Akio Urakawa</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className={styles.social}>
                            <a href="https://www.instagram.com/gabriel.akio/" target="_blank"><i className="fab fa-instagram"></i></a>
                            <a href="" target="_blank"><i className="fab fa-linkedin"></i></a>
                            <a href="https://github.com/GabrielAkioUrakawa" target="_blank"><i className="fab fa-github"></i></a>
                        </div>
                    </div>

                    <div className={styles.col3}>
                        <img src={imgJ} />
                        <h4>João Pedro Rodrigues Freitas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className={styles.social}>
                            <a href="https://www.instagram.com/joaoprfreitas/" target="_blank"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/joaoprf/" target="_blank"><i className="fab fa-linkedin"></i></a>
                            <a href="https://github.com/joaoprfreitas" target="_blank"><i className="fab fa-github"></i></a>
                        </div>
                    </div>

                    <div className={styles.col3}>
                        <img src={imgV} />
                        <h4>Vinicius Santos Monteiro</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className={styles.social}>
                            <a href="https://www.instagram.com/vini.moon/" target="_blank"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/vinicius-santos-monteiro-a3a88a1aa/" target="_blank"><i className="fab fa-linkedin"></i></a>
                            <a href="https://github.com/vini-mon" target="_blank"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default About