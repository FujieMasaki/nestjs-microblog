import { getAllPostsIds, getPostsData } from "../../lib/post";
import Layout from "../components/layout";

export async function getStaticPaths() {
  const paths = getAllPostsIds();

  return {
    paths,
    fallback: false,
    //pathに含まれていない他のパスは404ページを表示する。
  };
}

export async function getStaticProps({ params }){
    const postdata = await getPostsData(params.id)
    // ブログのデータをpostdataに入れる
    // getStaticPropsは非同期処理なので、asyncとawaitは忘れない。
    return {
        props: {
            postData,
        },
    };
}

export default function Post() {
  return
  <Layout>動的ルーティン</Layout>;
}
