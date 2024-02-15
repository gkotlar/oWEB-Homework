import { BlogPostComment } from "./blog-post-comment";

export interface BlogPostItem {
    id:any;

    title:string;
    picture:string;
    description:string;
    redirect:string;
    timestamp:string;

    text:string;
    likes:any;

    comments:any;

}
