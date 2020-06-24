import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'
import Date from '../../components/date'

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}: Blog</title>
      </Head>
      <section className={`${utilStyles.headingMd}`}>
        <h2>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a className={utilStyles.linkFeature}>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
              <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3>My writing on other sites</h3>
        <ul className="blog__externalList">
          <li><a className={utilStyles.linkStandard} href="https://medium.com/finder-tech/web-accessibility-standards-version-1-2ce65d5f4567">Web Accessibility Standards version 1</a></li>
          <li><a className={utilStyles.linkStandard} href="https://www.projectf.com.au/blog-collection/2020/1/30/alternative-paths-to-software-engineering-for-women">Alternative paths to software engineering for women</a></li>
          <li><a className={utilStyles.linkStandard} href="https://medium.com/finder-tech/imposter-syndrome-all-the-way-up-9d90753ad38c">Imposter syndrome all the way up</a></li>
          <li><a className={utilStyles.linkStandard} href="https://medium.com/finder-tech/analysing-our-engineering-teams-key-values-e9f79dd4391e">Analysing our engineering teams key values</a></li>
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
