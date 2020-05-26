import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}: About Me</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>About me</h2>
        <ul>
          <li><strong>2000:</strong> Taught myself to write HTML CSS so I could build geocities sites about my virtual ‘dogz’ 🐶</li>
          <li><strong>2007:</strong> Graduated high school not even knowing web development was a career option, but was always building websites as a hobby 🤷‍♀️</li>
          <li><strong>2017:</strong> Finally realised that I had the ability to really learn to code. Who knew?! 😮</li>
          <li><strong>February 2018:</strong> Quit my confectioner career and completed a 12 week web development bootcamp at <a href="https://generalassemb.ly/">General Assembly</a> 🍬</li>
          <li><strong>June 2018:</strong> Started as a Junior Front-End Web Developer at Finder 👩🏻‍💻</li>
          <li><strong>September 2019:</strong> Promoted to Engineer 🎉</li>
        </ul>

        <p>I’m inspired my minimalist and quirky designs that prioritise accessibility, and I love working within a highly creative team who value openness and collaboration.</p>
      </section>
      <section>
        <h3>Things I’ve worked on:</h3>
        <ul>
          <li>Design Ops: as a team we refreshed the navigation, page templates, side bar and more, giving the whole site a fresh new look and improved user experience. The page templates we created and rolled out across the site reduced bounce rate by ~25%.</li>
          <li>Gutenberg CMS: building ‘blocks’ (components) for the new WordPress editor, using a hybrid renderer that renders Wordpress content in a Next.JS front-end.</li>
          <li>Active member of an engineering diversity working group.</li>
          <li>Championed the Finder <a href="https://medium.com/finder-tech">Tech Blog.</a></li>
          <li>My team took out two awards in 2019 at an internal hackathon for a project focused on improving the accessibility of the website.</li>
          <li>Organised and presented web accessibility learning breaks with the team.</li>
          <li>Helped propose and implement a set of web accessibility engineering standards.</li>
          <li>Volunteer with the meetup group <a href="https://www.meetup.com/en-AU/Men-Championing-Change-Meetup/">Men Championing Change</a>.</li>
        </ul>
      </section>
      <section>
        <h3>Currently learning</h3>
        <p>Currently my focus is on improving my JavaScript skills and I’ve just completed a <a href="http://www.centreforinclusivedesign.org.au/services/pcwa/">Professional Certificate in Web Accessibility</a>.</p>
      </section>
      <section>
        <h3>Speaking</h3>
          <p>I regularly speak to software engineering students at General Assembly about CSS, but occasionally speak at meetups too.</p>
          <ul>
            <li><a href="https://www.youtube.com/watch?v=rlysgxOGbwU&amp;feature=youtu.be">“How to begin making web accessibility improvements when it feels overwhelming”</a> at the <a href="https://www.meetup.com/en-AU/SydCSS/" target="_blank" rel="noopener noreferrer">SydCSS</a> virtual meetup, April 2020</li>
            <li><a href="https://docs.google.com/presentation/d/19nUNOWb3MLZZXNZhlWYwP9CXvZnWKJUBjjlVzm4RBsw/edit#slide=id.g35f391192_00" target="_blank" rel="noopener noreferrer">“CSS images: not just for ‘funsies’”</a> at the <a href="https://www.meetup.com/en-AU/SydCSS/" target="_blank" rel="noopener noreferrer">SydCSS</a>&nbsp;first time speakers night, June 2019</li>
            <li><a href="https://docs.google.com/presentation/d/179cj8W5iFph7q565byeW1XtjmwqA4GcNQHxUv-Ix7fg/edit?usp=sharing" target="_blank" rel="noopener noreferrer">“Finding your passions and utilising your skill sets”</a> when changing careers into tech at a General Assembly event ‘How to land your dream gig in tech’, June 2019</li>
          </ul>
      </section>
    </Layout>
  )
}

