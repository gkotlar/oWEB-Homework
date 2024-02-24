import { Injectable, inject } from '@angular/core';
import { BlogPostItem } from '../models/blog-post-item';
import { BlogPostComment } from '../models/blog-post-comment';
import { POSTS } from '../../assets/db/blogs';
import { COMMENTS } from '../../assets/db/comments';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  protected blogPostList = POSTS;

  protected blogPostCommentsList = COMMENTS;

  firestore: Firestore = inject(Firestore);
  posts$: Observable<BlogPostItem[]>;

  constructor() {
    const blogsCollection = collection(this.firestore, 'blogs');
    this.posts$ = collectionData(blogsCollection) as Observable<BlogPostItem[]>;


  }
  
  getAllBlogPosts() : Observable<BlogPostItem[]>{
    return this.posts$;
  }

  getBlogPostById(id:number): BlogPostItem | undefined {
    return this.blogPostList.find((BlogPostItem) => BlogPostItem.id === id);
  }

  getAllBlogPostsComments() : BlogPostComment[] {
    return this.blogPostCommentsList;
  }

  submitComment(name:string, email:string, message:string, blogid:string, timestamp:string, likes: string){
    console.log(name, email, message, blogid, timestamp, likes);
    COMMENTS.push({name, email, message, blogid, timestamp, likes});
  }

  removeCommentById(email: string, timestamp:string) {
    this.blogPostCommentsList.pop()
    console.log(email, timestamp, "service component");
  }

  addLike(email: string, timestamp:string) {
    console.log(email, timestamp, "service like component");
  }

  createPOST(id:any, title:string, picture:string, description:string, redirect:string, timestamp:string, text:string, likes:any, comments:string){
  POSTS.push({id, title, picture, description, redirect, timestamp, text, likes, comments})
  }
 
  upload(){
   
  }
}
