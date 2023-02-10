import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
    
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
     
     
        <p>I am a Full Stack Web Developer in training.  I buttoned down the hatches and enrolled in M.I.T. Full Stack Web Development with MERN, so I can take my career to new heights!</p>
        <p>
          Follow me on <a href="https://www.linkedin.com/in/pam-afaneh/">Linkedin</a> and <a href="https://github.com/pammie89">Github</a>
         
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
    