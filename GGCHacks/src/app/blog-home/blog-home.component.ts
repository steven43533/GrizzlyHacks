import { Component } from '@angular/core';
import { Blog } from '../interfaces/blog';
import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent {
  blogList: Blog[];
  sub: Subscription;

  constructor(private afs: AngularFirestore, public auth: AuthService) {

  }

  ngOnInit(): void {
    this.sub = this.afs.collection<Blog>(`blogs`).valueChanges().subscribe(blogs => {
      this.blogList = blogs;
      this.blogList.sort((a, b) =>(a.datePosted < b.datePosted) ? 1 : -1)
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  convertDate(blog: Blog): string {
    let dateString = blog.datePosted.toString();
    return `${dateString}`;
  }
}
