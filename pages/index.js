import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "./components/Layout";
import { getPostsData } from "../lib/post";

import Link from "next/link";

import utilsStyle from "../styles/utils.module.css";

export async function getStaticProps(){
  const allPostsData = getPostsData();
  // id,title,date,thumbnailを取得
  console.log({allPostsData})
  return {
    props: {
      allPostsData,
    }
  }
}
// 外部からデータを一度だけ取得する関数

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <section className={utilsStyle.headingMd}>
        <p>明日からEBILAB稼働です。</p>
      </section>
      <h1>memoエンジニアのブログ</h1>
      <section>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg"
              className={styles.thumbnailImage}></img>
            </Link>

            <Link href="/">
              <a className={utilsStyle.boldText}>SSRとSSGの使い分けはいつなのか？</a>
            </Link>
            <br />
            <small className={utilsStyle.lightText}>2020</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg"
              className={styles.thumbnailImage}></img>
            </Link>

            <Link href="/">
              <a className={utilsStyle.boldText}>SSRとSSGの使い分けはいつなのか？</a>
            </Link>
            <br />
            <small className={utilsStyle.lightText}>2020</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg"
              className={styles.thumbnailImage}></img>
            </Link>

            <Link href="/">
              <a className={utilsStyle.boldText}>SSRとSSGの使い分けはいつなのか？</a>
            </Link>
            <br />
            <small className={utilsStyle.lightText}>2020</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
