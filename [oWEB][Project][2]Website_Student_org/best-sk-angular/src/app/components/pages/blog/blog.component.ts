import { Component, inject } from '@angular/core';
import { CardBlogComponent } from '../../cards/card-blog/card-blog.component';
import { POSTS } from '../../../../assets/db/blogs';
import { BlogService } from '../../../services/blog.service';
import { BlogPostItem } from '../../../models/blog-post-item';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CardBlogComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blogPostList:BlogPostItem[] = [];
  blogService : BlogService = inject(BlogService);

  constructor() {
    this.blogPostList = this.blogService.getAllBlogPosts();
  }
}

