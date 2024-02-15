import { Component, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../services/blog.service';
import { RouterModule } from '@angular/router';
import { BlogPostItem } from '../../../models/blog-post-item';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BlogPostComment } from '../../../models/blog-post-comment';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, DatePipe],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  blogService: BlogService = inject(BlogService);

  blogPost: BlogPostItem | undefined;
  blogPostCommentList: BlogPostComment[] | undefined;

  state = 0;

  commentForm = new FormGroup({
    fname: new FormControl(''),
    femail: new FormControl(''),
    fmessage: new FormControl(''),
    fblogId: new FormControl(''),
    timestamp: new FormControl(''),
    likes: new FormControl(''),
  });

  constructor() {
    const blogPostId = Number(this.route.snapshot.params["id"]);
    this.blogPost = this.blogService.getBlogPostById(blogPostId);
    this.blogPostCommentList = this.blogService.getAllBlogPostsComments();
  }

  submitComment() {
    this.blogService.submitComment(
      this.commentForm.value.fname ?? '',
      this.commentForm.value.femail ?? '',
      this.commentForm.value.fmessage ?? '',
      this.commentForm.value.fblogId = String(this.route.snapshot.params["id"]),
      this.commentForm.value.timestamp = String(new Date()),
      this.commentForm.value.likes = "0",

    );
      this.commentForm.setValue({fname: '', femail: '', fmessage: '', timestamp: '', fblogId: '', likes: ''})
  };

  removeCommentById(email: string, timestamp: string){
    this.blogService.removeCommentById(email, timestamp);
    console.log(email, timestamp, "blogpost-component")
  }

  addLike(email: string, timestamp: string){
    this.blogService.addLike(email, timestamp);
    console.log(email, timestamp, "blogpost-component");
  }

  addLikeTemp(){
    this.state = (this.state+1)%2
  }
  
}