import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "./components/layout";
import { getPostsData } from "../lib/post";

import Link from "next/link";

import utilsStyle from "../styles/utils.module.css";

// SSRの場合
export async function getStaticProps() {

  const allPostsData = getPostsData();
  // id,title,date,thumbnailを取得
  console.log({ allPostsData });
  return {
    props: {
      allPostsData,
    },
  };
}
// 外部からデータを一度だけ取得する関数

// SSGの場合
// export async function getServerSideProps(context){
//   return {
//     props: {
//       // コンポーネントに渡すためのprops
//     }
//   }
// }

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>明日からEBILAB稼働です。</p>
      </section>
      <h1>memoエンジニアのブログ</h1>
      <section>
        <div className={`${styles.grid}`}>
          {allPostsData.map(({id,title,date,thumbnail}) =>(
          <article key={id}>
            <Link href={`/posts/${id}`}>
              <img
                src={`${thumbnail}`}
                className={`${styles.thumbnailImage}`}
              ></img>
            </Link>

            <Link href={`/posts/${id}`}>
              <a className={utilsStyle.boldText}>
               {title}
              </a>
            </Link>
            <br />
            <small className={utilsStyle.lightText}>{date}</small>
          </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
