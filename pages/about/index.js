import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}: About Me</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>About me</h2>
        <ul className={utilStyles.listStandard}>
          <li className={utilStyles.listItemStandard}>
            <strong>2000:</strong> Taught myself to write HTML and CSS so I
            could build geocities sites about my virtual ‘dogz’ 🐶
          </li>
          <li className={utilStyles.listItemStandard}>
            <strong>February 2018:</strong> Finally realised I could learn how
            to code for real, quit my candy making career and started a 12 week
            web development bootcamp at{" "}
            <a
              className={utilStyles.linkFeature}
              href="https://generalassemb.ly/"
            >
              General Assembly
            </a>{" "}
            🍬
          </li>
          <li className={utilStyles.listItemStandard}>
            <strong>June 2018:</strong> Started as a Junior Front-End Web
            Developer at{" "}
            <a
              className={utilStyles.linkFeature}
              href="https://www.finder.com.au/"
            >
              Finder
            </a>{" "}
            👩🏻‍💻
          </li>
          <li className={utilStyles.listItemStandard}>
            <strong>September 2019:</strong> Promoted to Engineer 🎉
          </li>
          <li className={utilStyles.listItemStandard}>
            <strong>August 2020:</strong> Joined the Editor Fundamentals team at{" "}
            <a
              className={utilStyles.linkFeature}
              href="https://www.atlassian.com/"
            >
              Atlassian
            </a>{" "}
            🥳
          </li>
        </ul>
      </section>
      <section className={utilStyles.imageWrapper}>
        <img
          src="/images/taryndesk.jpg"
          className={utilStyles.imageHalf}
          alt="Taryn sitting in her home office"
        />
        <img
          src="/images/speaking-thanks.jpg"
          className={utilStyles.imageHalf}
          alt="Taryn speaking at SydCSS"
        />
      </section>
      <section>
        <h3 className={utilStyles.h3}>Things I’ve worked on</h3>
        <ul className={utilStyles.listStandard}>
          <li className={utilStyles.listItemStandard}>
            [Finder] Design Ops: as a team we refreshed the navigation, page
            templates, side bar and more, giving the whole site a fresh new look
            and improved user experience. The page templates we created and
            rolled out across the site reduced bounce rate by ~25%.
          </li>
          <li className={utilStyles.listItemStandard}>
            [Finder] Gutenberg CMS: building ‘blocks’ (components) for the new
            WordPress editor, using a hybrid renderer that renders Wordpress
            content in a Next.JS front-end.
          </li>
          <li className={utilStyles.listItemStandard}>
            [Finder] Engineering diversity working group.
          </li>
          <li className={utilStyles.listItemStandard}>
            [Finder]{" "}
            <a
              className={utilStyles.linkFeature}
              href="https://medium.com/finder-tech"
            >
              Tech Blog.
            </a>
          </li>
          <li className={utilStyles.listItemStandard}>
            [Finder] Web accessibility learning breaks.
          </li>
          <li className={utilStyles.listItemStandard}>
            [Finder] Helped propose and implement web accessibility standards.
          </li>
          <li className={utilStyles.listItemStandard}>
            Volunteer with the meetup group{" "}
            <a
              className={utilStyles.linkFeature}
              href="https://www.meetup.com/en-AU/Men-Championing-Change-Meetup/"
            >
              Men Championing Change
            </a>
            .
          </li>
        </ul>
      </section>
      <section className={utilStyles.imageWrapper}>
        <img
          src="/images/taryn-lexi-desk1.jpg"
          className={utilStyles.imageHalf}
          alt="Taryn at her desk with her big fluffy dog begging for treats"
        />
        <img
          src="/images/taryn-lexi-desk2.jpg"
          className={utilStyles.imageHalf}
          alt="Taryn at her desk giving her big fluffy dog a treat"
        />
      </section>
      <section>
        <h3 className={utilStyles.h3}>When I'm not at a computer</h3>
        <p>
          You'll usually find me going on walks with{" "}
          <a
            className={utilStyles.linkFeature}
            href="https://www.instagram.com/lexi.samoyed"
          >
            Lexi the Samoyed dog
          </a>
          , exploring our local area and Sydney beaches. 🐶
        </p>
        <p>
          Like most millenials, I have an ever increasing obsession with indoor
          plants and need to be held back from the Bunnings plant section. 🌱
        </p>
        <p>
          I still bake on occasion and am trying to make #DevCakes a thing. 🎂{" "}
        </p>
        <p>
          I'm also a bit of a bookworm, reviewing technical and career
          development books on my{" "}
          <a
            className={utilStyles.linkFeature}
            href="https://www.instagram.com/tarynewens/"
          >
            Instagram
          </a>
          . 📚
        </p>
      </section>
    </Layout>
  );
}
