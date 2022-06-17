import Container from '../components/layout/Container'
import styles from './Home.module.css'

import logo from '../img/PetStore.png'

function Home() {
    return (
        <Container customClass="min-height">

            <div className={styles.col_2}>
                <h1>Faça o melhor pelo seu PET</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div className={styles.col_2}>
                <img src={logo} alt="Foto do Produto"/>
            </div>

        </Container>
    )
    
}

export default Home