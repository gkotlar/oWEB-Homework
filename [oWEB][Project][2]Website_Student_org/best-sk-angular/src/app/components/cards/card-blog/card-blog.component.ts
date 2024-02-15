import { Component, Input } from '@angular/core';
import { BlogPostItem } from '../../../models/blog-post-item';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card-blog.component.html',
  styleUrl: './card-blog.component.css'
})
export class CardBlogComponent {
  @Input({required:true})
  post!:BlogPostItem;
}
