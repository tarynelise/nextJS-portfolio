import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Navigation from "./navigation";
import Footer from "./footer";

export const siteTitle = "Taryn Ewens: Front-End Web Developer";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A portfolio site for Taryn Ewens, Front-End Web Developer in Sydney, Australia."
        />
        <meta name="og:title" content={siteTitle} />
        <meta
          name="google-site-verification"
          content="-ys_hH9AvtYVdhUd3g9XoxoHqPEyExorK95JKZgmVX4"
        />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <div className="header__logo">
              <Link href="/">
                <a aria-label="Taryn Ewens" className={styles.header__logoText}>
                  <h1 className={`${styles.heading} ${styles.headingHome}`}>
                    Taryn
                    <img
                      src="/images/profile.png"
                      className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                      alt="Cartoon avatar of Taryn Ewens"
                    />
                    Ewens
                  </h1>
                </a>
              </Link>
            </div>
            <Navigation />
          </>
        ) : (
          <>
            <div className="header__logo">
              <Link href="/">
                <a aria-label="Taryn Ewens" className={styles.header__logoText}>
                  <h1 className={`${styles.heading} ${styles.headingOther}`}>
                    Taryn
                    <img
                      src="/images/profile.png"
                      className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                      alt="Cartoon avatar of Taryn Ewens"
                    />
                    Ewens
                  </h1>
                </a>
              </Link>
            </div>
            <Navigation />
          </>
        )}
      </header>
      <main>{children}</main>
      <Footer />
      {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )} */}
    </div>
  );
}
