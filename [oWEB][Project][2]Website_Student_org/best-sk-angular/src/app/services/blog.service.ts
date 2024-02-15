import { Injectable } from '@angular/core';
import { BlogPostItem } from '../models/blog-post-item';
import { POSTS } from '../../assets/db/blogs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  protected blogPostList = POSTS;

  constructor() { }
  
  getAllBlogPosts() : BlogPostItem[] {
    return this.blogPostList;
  }
  getBlogPostById(id:number): BlogPostItem | undefined {
    return this.blogPostList.find((BlogPostItem) => BlogPostItem.id === id);
  }
}
