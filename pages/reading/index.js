import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}: Book Reviews</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>Book Reviews</h2>
        <p>
          A selection of tech and career related books which I've read this
          year.
        </p>
        <h3>Currently reading</h3>
        <p>How Computers Really Work by Matthew Justice</p>
        <h3>2021</h3>
        <ul>
          <li>
            <a href="#book-deepWork">Deep Work</a>
          </li>
          <li>
            <a href="#book-indistractable">Indistractable</a>
          </li>
          <li>
            <a href="#book-technicallyWrong">Technically Wrong</a>
          </li>
          <li>
            <a href="#book-algorithmsOfOppression">Algorithms of Oppression</a>
          </li>
          <li>
            <a href="#book-invisibleWomen">Invisible Women</a>
          </li>
        </ul>
        <hr className={utilStyles.hr} />
        <section className={utilStyles.bookReview}>
          <img
            src="/bookImages/deep_work.jpg"
            className={utilStyles.bookReviewImage}
            alt="The audio book of Deep Work"
          />
          <h3 id="book-deepWork" className={utilStyles.bookReviewTitle}>
            Deep Work
          </h3>
          <p className={utilStyles.bookReviewAuthor}>by Cal Newport</p>
          <p>
            I’m giving this book a reluctant 4 stars. It’s reluctant because
            this book is full of long winded anecdotes about people who work
            deeply. Which is fine, but ironically it distracted me from the key
            takeaways of *how* to work deeply. To the point that I’m listening
            to it a second time because I feel like I tuned out a bit! 😅
          </p>

          <p>
            Saying all this however, this book has inspired me to improve my
            daily habits. Since starting this book I have become much better at
            time blocking and scheduling my day. I also removed all social media
            apps from my phone during the working week. It’s been *really* hard
            but I actually didn’t miss them as much as I thought I would.
          </p>

          <p>Other key takeaways from the book:</p>
          <ul>
            <li>
              Have a consistent cut off time to finish work for the day (rest is
              important for deep work!)
            </li>
            <li>Deep work takes *lots* of practise</li>
            <li>
              Even the most successful people can’t do more than 4 hours of deep
              work per day.
            </li>
            <li>
              Productive meditation is important: using the time when you’re
              physically busy but mentally not (eg. walking the dog for me) to
              mull over a problem
            </li>
          </ul>
          <p>
            If you love stories and anecdotes of successful people and how they
            work, you’ll probably love this book! If you don’t, it will be more
            of a struggle but it’s definitely a good kick in the pants to take
            some action towards improving your focus.
          </p>
          <p>
            I'm quite keen to check out Cal's book on 'Digital Minimalism'
            sometime soon.
          </p>
          <p>⭐️⭐️⭐️⭐️</p>
          <a href="https://www.booktopia.com.au/deep-work-cal-newport/book/9780349411903.html">
            Purchase Deep Work from Booktopia
          </a>
        </section>
        <hr className={utilStyles.hr} />
        <section className={utilStyles.bookReview}>
          <img
            src="/bookImages/indistractable.png"
            className={utilStyles.bookReviewImage}
            alt="The audio book Indistractable"
          />
          <h3 id="book-indistractable" className={utilStyles.bookReviewTitle}>
            Indistractable: How to Control Your Attention and Choose Your Life
          </h3>
          <p className={utilStyles.bookReviewAuthor}>by Nir Eyal, Julie Li</p>
          <p>
            My unplanned bonus book of January. If you’ve never read anything at
            all, ever, about distraction or habits or focus then this is
            probably a good place to start! But there’s nothing really new or
            groundbreaking. One chapter felt like a summarised version of Atomic
            Habits (which I’ve already read and loved!). Others chapters were
            common sense, eg. remove apps and notifications from your phone.
          </p>
          <p>
            There were some good tips in there but it wasn’t anything I hadn’t
            heard before. Also, a great question came from @hilarycallaghan who
            asked me if I thought it would apply to neurodiverse folk: I highly
            doubt it.
          </p>
          <p>⭐️⭐️</p>
          <a href="https://www.booktopia.com.au/indistractable-nir-eyal/book/9781526610201.html">
            Purchase Indistractable from Booktopia
          </a>
        </section>
        <hr className={utilStyles.hr} />
        <section className={utilStyles.bookReview}>
          <img
            src="/bookImages/technically_wrong.png"
            className={utilStyles.bookReviewImage}
            alt="The book Technically Wrong"
          />
          <h3 id="book-technicallyWrong" className={utilStyles.bookReviewTitle}>
            Technically Wrong
          </h3>
          <p className={utilStyles.bookReviewAuthor}>
            by Sara Wachter-Boettcher
          </p>
          <p>
            I *loved* this book! Definitely one of my favourites that I’ve read
            lately!
          </p>
          <p>
            If you’ve read Invisible Women it does touch on a lot of similar
            concepts but this book is way shorter, way less intense, and won’t
            leave you feeling emotionally drained. It also raises broader issues
            in the tech industry. It touches on the myth of meritocracy as most
            of these types of books do, but it looks more closely at tech
            companies and examples of when things have gone wrong.
          </p>
          <p>
            There’s examples from Twitter, Facebook, Uber, Reddit, Google,
            Tumblr, etc. that prove time and time again what happens when the
            people who are designing and building products all look the same,
            all think the same. They’re famous examples so if you keep on top of
            this sort of news, many of them won’t be a surprise to you - but if
            you’re new to tech like I am it’s very interesting to read about!
          </p>
          <p>
            There’s also a great concept in the book about designing with
            “stress cases” in mind rather than “edge cases”.
          </p>
          <p>
            If you work in the tech industry and haven’t yet begun researching
            the types of impact badly designed technology can have (let alone
            the tech industry itself), I highly recommend this book as a great
            place to start.
          </p>
          <p>⭐️⭐️⭐️⭐️⭐️</p>
          <a href="https://www.booktopia.com.au/technically-wrong-sara-wachter-boettch/book/9780393356045.html">
            Purchase Technically Wrong from Booktopia
          </a>
        </section>
        <hr className={utilStyles.hr} />
        <section className={utilStyles.bookReview}>
          <img
            src="/bookImages/algorithms_of_oppression.png"
            className={utilStyles.bookReviewImage}
            alt="Audio book of Algorithms of Oppression"
          />
          <h3
            id="book-algorithmsOfOppression"
            className={utilStyles.bookReviewTitle}
          >
            Algorithms of Oppression: How Search Engines Reinforce Racism
          </h3>
          <p className={utilStyles.bookReviewAuthor}>by Safiya Umoja Noble</p>
          <p>
            This book is definitely not a fun, light and easy read. Even
            listening to the audiobook, it was difficult to focus at times. But
            many parts were so interesting! ⁣
          </p>
          <p>This book covers so many topics, including:</p>
          <ul>
            <li>search algorithms being biased</li>
            <li>the racism and sexism that is in search results</li>
            <li>
              the lack of diversity in decision making positions in big tech
              companies that create these products
            </li>
            <li>the history of discrimination in media</li>
            <li>
              the laws around bias in media and how that applies to the internet
            </li>
            <li>Google’s position having a monopoly on information</li>
            <li>and so much more!</li>
          </ul>
          <p>
            It raises large concerns around biased information being interpreted
            as accurate & objective. A huge takeaway for me was how most people
            believe the results they get from a Google search are unbiased. Many
            don’t even realise they’re being advertised to. Is it any wonder the
            world is currently so divided when people on opposing sides see the
            information they’re provided with on the internet as unbiased when
            it is anything but?
          </p>
          <p>
            It asks a huge question - if Google is not responsible for the
            results of their own algorithm, then who is?
          </p>
          <p>
            Definitely worth a read! I would have given it 5 stars had it
            included more research on the algorithms themselves - but of course,
            this is difficult since they’re kept under wraps by the big
            companies!
          </p>
          <p>⭐️⭐️⭐️⭐️</p>
          <a href="https://www.booktopia.com.au/algorithms-of-oppression-safiya-umoja-noble/book/9781479837243.html">
            Purchase Algorithms of Oppression from Booktopia
          </a>
        </section>
        <hr className={utilStyles.hr} />
        <section className={utilStyles.bookReview}>
          <img
            src="/bookImages/invisible_women.png"
            className={utilStyles.bookReviewImage}
            alt="The book Invisible Women on a desk"
          />
          <h3 id="book-invisibleWomen" className={utilStyles.bookReviewTitle}>
            Invisible Women
          </h3>
          <p className={utilStyles.bookReviewAuthor}>
            by Caroline Criado Perez
          </p>
          <p>
            Okay, technically I reviewed this late 2020 but it's too good not to
            include here. It was a tough read but so important. Definitely not
            the sort of book you read to relax...
          </p>
          <p>
            It will make you feel anger, sadness, disappointment, and just
            complete outrage. Or at least, it should. If you’re a woman it will
            also be full of “mmmhmmm!” moments of validation.
          </p>
          <p>
            ⁣ It covers data bias in technology, urban planning, medicine, the
            myth of meritocracy, politics, disasters, even snow clearing, and
            much more. ⁣
          </p>
          <p>
            I honestly think this book should be required reading in all schools
            and I highly recommend it to anyone who hasn’t read it yet. Just be
            prepared for a hard and emotional read (especially if you are a
            woman). 😓
          </p>
          <p>⭐️⭐️⭐️⭐️⭐️</p>
          <a href="https://www.booktopia.com.au/invisible-women-caroline-criado-perez/book/9781784706289.html">
            Purchase Invisible Women from Booktopia
          </a>
        </section>
      </section>
    </Layout>
  );
}
