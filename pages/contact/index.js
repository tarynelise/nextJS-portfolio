import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}: Contact</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>Want to say hello?</h2>
        <p>You can reach out by email via <a href="mailto:taryn@taryn.codes">taryn@taryn.codes</a>.</p>
      </section>
    </Layout>
  )
}
