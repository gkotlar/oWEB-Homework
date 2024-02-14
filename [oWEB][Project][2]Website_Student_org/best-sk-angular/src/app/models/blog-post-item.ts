import { BlogPostComment } from "./blog-post-comment";

export interface BlogPostItem {
    title:string;
    text:string;
    likes:number;
    comments:Array<BlogPostComment>;

}
