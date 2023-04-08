import { Component } from '@angular/core';
import { Blog, BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-edit-blog-modal',
  templateUrl: './edit-blog-modal.component.html',
  styleUrls: ['./edit-blog-modal.component.css']
})
export class EditBlogModalComponent {

  constructor(blogService: BlogService, blogToEdit: Blog) { }

  ngOnInit(): void {
    
  }  

}
