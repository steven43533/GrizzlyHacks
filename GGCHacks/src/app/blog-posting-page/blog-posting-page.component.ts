import { Component } from '@angular/core';
import { Blog } from '../interfaces/blog';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-blog-posting-page',
  templateUrl: './blog-posting-page.component.html',
  styleUrls: ['./blog-posting-page.component.css']
})
export class BlogPostingPageComponent {

  blogPostingForm: FormGroup;

  constructor(private fb: FormBuilder, private afs: AngularFirestore){
    this.blogPostingForm = fb.group({
      blogTitle: ['', Validators.required],
      blogAuthor: ['', Validators.required],
      blogContent:['', Validators.required]
    });
  }

  postBlog(): void {
    const blogTitle: string = this.blogPostingForm.get('blogTitle').value;
    const blogAuthor: string = this.blogPostingForm.get('blogAuthor').value;
    const blogContent: string = this.blogPostingForm.get('blogContent').value;
    this.afs.collection('blogs').doc(blogTitle).set({
      title: blogTitle,
      author: blogAuthor,
      datePosted: new Date(),
      content: blogContent
    })
  }
}
