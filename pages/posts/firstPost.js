import Head from "next/head";
import Link from "next/link";


export default function FirstPost() {
  return (
    <div>
      <Head>
          <title>最初の投稿</title>
      </Head>
      <h1>dddd</h1>
      <Link href="/">Homeへ戻る</Link>
    </div>
  );
}
