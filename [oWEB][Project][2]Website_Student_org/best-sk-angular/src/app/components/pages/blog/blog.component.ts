import { Component, inject } from '@angular/core';
import { CardBlogComponent } from '../../cards/card-blog/card-blog.component';
import { POSTS } from '../../../../assets/db/blogs';
import { BlogService } from '../../../services/blog.service';
import { BlogPostItem } from '../../../models/blog-post-item';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CardBlogComponent, ReactiveFormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blogPostList:BlogPostItem[] = [];
  blogService : BlogService = inject(BlogService);

  constructor() {
    this.blogPostList = this.blogService.getAllBlogPosts();
  }

  blogForm = new FormGroup({
    fid: new FormControl(''),
    ftitle: new FormControl(''),
    fpicture: new FormControl(''),
    fdescription: new FormControl(''),
    fredirect: new FormControl(''),
    ftimestamp: new FormControl(''),
    ftext: new FormControl(''),
    flikes: new FormControl(''),
    fcomments: new FormControl('')
  });

  createPost(){
    this.blogService.createPOST(
        this.blogForm.value.fid ?? '',
        this.blogForm.value.ftitle ?? '',
        this.blogForm.value.fpicture ?? '',
        this.blogForm.value.fdescription ?? '',
        this.blogForm.value.fredirect ?? '',
        this.blogForm.value.ftimestamp = String(new Date()),
        this.blogForm.value.ftext ?? '',
        this.blogForm.value.flikes ?? '',
        this.blogForm.value.fcomments ?? '',

    )
  }

}

