import styles from './footer.module.css'
import Quote from './quote'
import FooterImage from './footerImage'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <FooterImage/>
      <Quote/>
      <ul className={styles.footer__list}>
        <li className={styles.footer__listItem}>
          <a href="https://twitter.com/TarynEwens" className={styles.footer__listLink}>Twitter</a>
        </li>
        <li className={styles.footer__listItem}>
          <a href="https://www.instagram.com/taryn.codes/" className={styles.footer__listLink}>Instagram</a>
        </li>
        <li className={styles.footer__listItem}>
          <a href="https://github.com/tarynelise" className={styles.footer__listLink}>GitHub</a>
        </li>
        <li className={styles.footer__listItem}>
          <a href="https://www.linkedin.com/in/tarynewens/" className={styles.footer__listLink}>LinkedIn</a>
        </li>
        <li className={styles.footer__listItem}>
          <a href="https://codepen.io/tarynewens" className={styles.footer__listLink}>CodePen</a>
        </li>
      </ul>
      <p className={styles.footer__copyright}>
        <small>Designed and built by Taryn Ewens - an experiment with <a href="https://nextjs.org/">Next.JS</a> | © {new Date().getFullYear()}</small>
      </p>
    </footer>
  )
}
