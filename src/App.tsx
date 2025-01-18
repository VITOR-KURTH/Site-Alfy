import './App.css'
import styles from './styles/styles.module.css'
import Navbar from './components/Navbar/Navbar'
import Carousel from './components/Carrousel/Carousel'

function App() {
  return (
    <>
      <Navbar />
      <div className={styles.HomeContainer}>
        <div className={styles.ContainerTitulo}>
          <h1 className={styles.TituloDesc}>
            Aprenda a ler e escrever de forma simples e divertida com IA!
          </h1>
          <div className={styles.ContainerComeçar}>
            <button className={styles.BtnComeçar}>
              Comece agora ➤
            </button>
          </div>
        </div>
        <div className={styles.HomeImage}>
          <img src='/Computador.png' alt="Computador" />
        </div>
      </div>
      <div className={styles.SobreContainer}>
      <div className={styles.ContainerTituloSobre}>
          <h1 className={styles.TituloDescSobre}>
          Aulas e atividades que usam jogos e Inteligência Artificial para a alfabetização.
          </h1>
          </div>
          <div className={styles.CarouselContainer}>
          <Carousel/>
          </div>
      </div>
    </>
  )
}

export default App