import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

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
          <a href="/about/">Learn more about me →</a>
          <a href="/blog/">Check out my writing →</a>
        </div>
      </section>
    </Layout>
  )
}

