import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../services/auth.service';
import { Blog, BlogService } from '../services/blog.service';



@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css'],
  providers: [BlogService]
})
export class BlogHomeComponent {
  blogs: Blog[] = null; //initialize blogs to null so that the template can check if blogs are loaded
  sub: Subscription;

  constructor(public auth: AuthService, private blogService: BlogService) {
        
  }

  ngOnInit(): void {
    this.sub = this.blogService.blogs$.subscribe(blogs => {
      this.blogs = blogs;
      console.log('bloghomecomponent blogs recieved:' + blogs);
      //set isLoading to false once blogs are loaded
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  
  editBlog(blog: Blog): void {
    this.blogService.editBlog(blog);
  }

  deleteBlog(blog: Blog): void {
    if (confirm("Are you sure you want to delete this blog?")) {
      this.blogService.deleteBlog(blog);
    }
  }

}
