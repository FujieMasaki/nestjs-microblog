import path from "path";
import fs from "fs";
import matter
 from "matter";


const postsDirectory = path.join(process.cwd(), "posts")
// cwd = currentdirectory
// currentdirectoryの中のpostsを参照している。

export function getPostsData(){
    const fileNames = fs.readdirSync(postsDirectory);
    // postDirectoryをオブジェクトの配列としてもっている
    const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "")
    // replaceで.mdを削除し、第二引数は空にする。ファイル名はid

    const fullPath = path.join(postsDirectory,fileName);
    // マークダウンファイルを文字列として読み取る
    const fileContents = fs.readFileSync(fullPath, "utf8");
    //readFileSyncでfullpathで指定した中身のデータを文字列として見ることができる。

    const matterResult = matter(fileContents);
    return {
        id,
        ...matterResult,
        // スプレッド構文でmdのtitle,data,thumbnailを取得する
    }
    })

}
// posts内のmdファイルのデータを取り出す