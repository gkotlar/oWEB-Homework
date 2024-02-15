import { BlogPostComment } from "./blog-post-comment";

export interface BlogPostItem {
    id:number;

    title:string;
    picture:string;
    description:string;
    redirect:string;
    timestamp:string;

    text:string;
    likes:number;

    comments:any;

}
