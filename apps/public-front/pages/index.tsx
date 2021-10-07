import Layout, { siteTitle } from '../components/layout/layout';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.scss';
import { getSortedPostsData } from '@api/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

export function Home({ allPostsData }) {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi! My name is Fedor Shamakhov</p>
        <p>I am a web developer and former physical engineer</p>
        <p>Currently I work at <a href="https://itsumma.ru">ITSumma</a></p>
        <p>My email: <a href="mailto:fedor.shamakhov@gmail.com">fedor.shamakhov@gmail.com</a></p>
        <p>Telegram: <a href="tg://resolve?domain=fshamakhov">@fshamakhov</a></p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export default Home;
