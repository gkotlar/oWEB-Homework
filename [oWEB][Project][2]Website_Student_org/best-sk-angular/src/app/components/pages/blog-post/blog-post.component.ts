import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../services/blog.service';
import { RouterModule } from '@angular/router';
import { BlogPostItem } from '../../../models/blog-post-item';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  blogService : BlogService = inject(BlogService);

  blogPost: BlogPostItem | undefined;



  constructor() {
    const blogPostId = Number(this.route.snapshot.params["id"]);
    this.blogPost = this.blogService.getBlogPostById(blogPostId);
  }
}