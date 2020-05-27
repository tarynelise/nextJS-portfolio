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
          I’m a confectioner turned <strong>front-end web developer</strong> in Sydney, Australia.
        </p>
        <p>
          I love creating art with CSS and dabbling in design, but I'm most passionate about accessibility and diversity in the tech industry. And my fluffy doggo!
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

