import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";

export default function Community() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}: Community</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>Community involvement</h2>
        <section>
          <h3 className={utilStyles.h3}>General Assembly</h3>
          <p>
            I regularly speak to each software engineering class at{" "}
            <a
              className={utilStyles.linkFeature}
              href="https://generalassemb.ly/"
            >
              General Assembly
            </a>{" "}
            Sydney (and now sometimes Melbourne!). I introduce them to CSS, the
            amazing things that can be created with it (think fun interactions
            and art!), and resources for them to continue learning more!
          </p>
          <p>
            I often make time for mentoring sessions with individual students,
            as well as other career changers.
          </p>
        </section>

        <section>
          <h3 className={utilStyles.h3}>Men Championing Change</h3>
          <p>
            I volunteer with the meetup group{" "}
            <a
              className={utilStyles.linkFeature}
              href="https://www.meetup.com/en-AU/Men-Championing-Change-Meetup/"
            >
              Men Championing Change
            </a>
            , assisting on their organising committee and looking after their
            Twitter account.
          </p>
        </section>

        <section className={utilStyles.imageWrapper}>
          <img
            src="/images/taryn-speaking1.jpg"
            className={utilStyles.imageHalf}
            alt="Taryn speaking at SydCSS"
          />
          <img
            src="/images/taryn-speaking2.jpg"
            className={utilStyles.imageHalf}
            alt="Taryn speaking at SydCSS"
          />
        </section>
        <section>
          <h3 className={utilStyles.h3}>Meetups</h3>
          <ul className={utilStyles.listStandard}>
            <li className={utilStyles.listItemStandard}>
              “Personal branding to get your dream job”
              <br />
              <small className={utilStyles.lightText}>
                at the{" "}
                <a
                  className={utilStyles.linkFeature}
                  href="https://musescodejs.org/hobart.html"
                >
                  Muses Code Hobart
                </a>{" "}
                virtual meetup, December 2020
              </small>
            </li>
            <li className={utilStyles.listItemStandard}>
              “Break into coding” industry panel
              <br />
              <small className={utilStyles.lightText}>
                <a
                  className={utilStyles.linkFeature}
                  href="https://generalassemb.ly/"
                >
                  General Assembly
                </a>{" "}
                event, November 2020
              </small>
            </li>
            <li className={utilStyles.listItemStandard}>
              <a
                className={utilStyles.linkFeature}
                href="https://www.youtube.com/watch?v=rlysgxOGbwU&amp;feature=youtu.be"
              >
                “How to begin making web accessibility improvements”
              </a>
              <br />
              <small className={utilStyles.lightText}>
                at the{" "}
                <a
                  className={utilStyles.linkFeature}
                  href="https://www.meetup.com/en-AU/SydCSS/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SydCSS
                </a>{" "}
                virtual meetup, April 2020
              </small>
            </li>
            <li className={utilStyles.listItemStandard}>
              <a
                className={utilStyles.linkFeature}
                href="https://docs.google.com/presentation/d/19nUNOWb3MLZZXNZhlWYwP9CXvZnWKJUBjjlVzm4RBsw/edit#slide=id.g35f391192_00"
              >
                “CSS images: not just for ‘funsies’”
              </a>
              <br />
              <small className={utilStyles.lightText}>
                {" "}
                at the{" "}
                <a
                  className={utilStyles.linkFeature}
                  href="https://www.meetup.com/en-AU/SydCSS/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SydCSS
                </a>
                &nbsp;first time speakers night, June 2019
              </small>
            </li>
            <li className={utilStyles.listItemStandard}>
              <a
                className={utilStyles.linkFeature}
                href="https://docs.google.com/presentation/d/1I-kJOWeFS35rfZ7yx6FV6cVCzaor68LlSFrHBxKuuDY/edit?usp=sharing"
              >
                “Finding your passions and utilising your skill sets”
              </a>
              <br />
              <small className={utilStyles.lightText}>
                at a{" "}
                <a
                  className={utilStyles.linkFeature}
                  href="https://generalassemb.ly/"
                >
                  General Assembly
                </a>{" "}
                event ‘How to land your dream gig in tech’, June 2019
              </small>
            </li>
          </ul>
        </section>
        <section>
          <h3 className={utilStyles.h3}>Online</h3>
          <ul className={utilStyles.listStandard}>
            <li className={utilStyles.listItemStandard}>
              <a
                className={utilStyles.linkFeature}
                href="https://www.careerfaqs.com.au/careers/insider-stories/taryn-ewens-software-engineer"
              >
                Career FAQ's interview
              </a>
              <small className={utilStyles.lightText}> - August 2020</small>
            </li>
            <li className={utilStyles.listItemStandard}>
              <a
                className={utilStyles.linkFeature}
                href="https://www.instagram.com/codelikeagirlau/"
              >
                Code Like A Girl Instagram Stories Takeover
              </a>
              <small className={utilStyles.lightText}> - July 2020</small>
            </li>
            <li className={utilStyles.listItemStandard}>
              <a
                className={utilStyles.linkFeature}
                href="https://www.instagram.com/tv/CAuMW_MjNoC/"
              >
                Instagram Live with Createable Tech
              </a>
              <small className={utilStyles.lightText}> - May 2020</small>
            </li>
          </ul>
        </section>
      </section>
    </Layout>
  );
}
