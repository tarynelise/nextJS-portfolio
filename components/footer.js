import styles from './footer.module.css'
import Quote from './quote'
import FooterImage from './footerImage'
import utilStyles from '../styles/utils.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <FooterImage/>
      <Quote/>
      <ul className={styles.footer__list}>
        <li className={styles.footer__listItem}>
          <a className={`${utilStyles.linkFeature} ${styles.footer__listLink}`} href="https://twitter.com/TarynEwens">Twitter</a>
        </li>
        <li className={styles.footer__listItem}>
          <a className={`${utilStyles.linkFeature} ${styles.footer__listLink}`} href="https://www.instagram.com/taryn.codes/">Instagram</a>
        </li>
        <li className={styles.footer__listItem}>
          <a className={`${utilStyles.linkFeature} ${styles.footer__listLink}`} href="https://github.com/tarynewens">GitHub</a>
        </li>
        <li className={styles.footer__listItem}>
          <a className={`${utilStyles.linkFeature} ${styles.footer__listLink}`} href="https://www.linkedin.com/in/tarynewens/">LinkedIn</a>
        </li>
        <li className={styles.footer__listItem}>
          <a className={`${utilStyles.linkFeature} ${styles.footer__listLink}`} href="https://codepen.io/tarynewens">CodePen</a>
        </li>
      </ul>
      <p className={styles.footer__copyright}>
        <small>Designed and built by Taryn Ewens - an experiment with <a className={utilStyles.linkFeature} href="https://nextjs.org/">Next.JS</a> | © {new Date().getFullYear()}</small>
      </p>
    </footer>
  )
}
