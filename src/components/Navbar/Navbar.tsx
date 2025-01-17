import styles from './Navbar.module.css'


function Navbar() {
    return(
    <>
    <div className={styles.container}>
        <div className={styles.title}>Alfy</div>
        <div className={styles.NavbarLinks}>
            <a href='link1'>Home</a>
            <a href='link1'>Sobre</a>
            <a href='link1'>Contato</a>
        </div>
        <div className={styles.NavbarImage}>
        <img src="/LOGOCOMPLETA.png" width={70} height={70} alt="LogoNavbar" />
        </div>
    </div>
    </>
    )
}

export default Navbar