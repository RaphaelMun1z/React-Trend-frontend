import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <p>Site apenas para estudo<br />Desenvolvido por <a href='https://www.linkedin.com/in/raphael-muniz-7119911a2/' target='_blank'>Raphael Muniz</a></p>
      </div>
    </footer >
  )
}

export default Footer