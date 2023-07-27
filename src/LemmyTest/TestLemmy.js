import {LemmyHttp} from "lemmy-js-client";
import * as fs from "fs";

let baseUrl = 'https://lemmy.ml/';
let client = new LemmyHttp(baseUrl, {});
let loginForm = {
    username_or_email: "insaneduck",
    password: "Login1234%",
};

let comments = 'comments';
let posts = 'posts';
let post = 'post'
await client.getPosts({page:1,limit:50,sort:"Active"}).then(data => posts=JSON.stringify(data)).catch(error=>console.log(error))
writeToFile('posts.json',posts)
await client.getPost({id:2453149}).then(data=> post = JSON.stringify(data))
writeToFile('post.json',post)
await client.getComments({post_id:2453149,}).then(data=> comments = JSON.stringify(data))
writeToFile('comments.json',comments)
function writeToFile(fileName,string)
{
    fs.writeFile(fileName, string, err => {
        if (err) {
            console.error(err);
        }
        // file written successfully
    });

}
