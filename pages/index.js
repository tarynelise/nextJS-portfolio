import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}: Home</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I’m <strong>Taryn!</strong>
        </p>
        <p>
          I’m a confectioner turned <strong>front-end developer</strong> in Sydney, Australia.
        </p>
        <p>
          I'm passionate about inclusion, accessibility, and improving user experiences for all. I also enjoy getting creative with CSS, and occasionally dabbling in design!
        </p>

        <div>
          <Link href="/about">
            <a className={`${utilStyles.linkFeature} ${utilStyles.linkFeatureCTA}`}>Learn more about me →</a>
          </Link>
          <Link href="/blog">
            <a className={`${utilStyles.linkFeature} ${utilStyles.linkFeatureCTA}`}>Check out my blog →</a>
          </Link>
        </div>
      </section>
    </Layout>
  )
}

