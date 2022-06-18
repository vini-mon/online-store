import Container from '../components/layout/Container'
import styles from './Home.module.css'

import logo from '../img/PetStore.png'

function Home() {
    return (
        <Container customClass="min-height">

            <div className={styles.col_2}>
                <h1>Faça o melhor pelo seu PET</h1>
                <p>

                    Conveniência é com a gente! Tudo é preparado e organizado
                    para você encontrar facilmente o que procura, e o melhor:
                    a qualquer hora e no lugar que preferir.
                    <br />
                    <br />
                    Sabemos que cuidar de nossos bichinhos é um prazer: selecionar
                    a melhor ração, buscar mimos novos, levá-los para um banho.
                    O que importa é ver que eles estão bem.

                </p>
                </div>

            <div className={styles.col_2}>
                <img src={logo} alt="Foto do Produto"/>
            </div>

        </Container>
    )
    
}

export default Home