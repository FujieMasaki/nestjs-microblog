import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html"

const postsDirectory = path.join(process.cwd(), "posts");
// cwd = currentdirectory
// currentdirectoryの中のpostsを参照している。
export function getPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  // postDirectoryをオブジェクトの配列としてもっている
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    // replaceで.mdを削除し、第二引数は空にする。ファイル名はid

    const fullPath = path.join(postsDirectory, fileName);
    // マークダウンファイルを文字列として読み取る
    const fileContents = fs.readFileSync(fullPath, "utf8");
    //readFileSyncでfullpathで指定した中身のデータを文字列として見ることができる。

    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult.data,
      // スプレッド構文でmdのtitle,data,thumbnailを取得する
    //  allPostsDateに関するreturn
    };
  });
  return allPostsData;
//   getPostsDataに対するreturn
}
// posts内のmdファイルのデータを取り出す


// getStaticPathで使うpathを取得する
export function getAllPostsIds(){
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((filename) =>{
    return{
      params:{},
        id:filename.replace(/\.md$/,"")
    }
  })
}

// idに基づいてブログ投稿データを返す
export async function getPostData(id){
  const fullPath = path.join(postsDirectory,`${id}.md`)
  // フルパスを取得
  const fileContent = fs.readFileSync(fullPath, "utf8");
  // 中身を文字列として読み取る

  const matterResult = matter(fileContent);
  // metaデータを解析する

  const blogContent = await remark().use(html).process(matterResult.content);
  // matterResult.contentをHTMLとして解析できる

  const blogContentHTMl = blogContent.toString();

  return {
    id,
    blogContentHTMl,
    ...matterResult.data,
  };
}