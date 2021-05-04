import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Post, PostsService } from '../shared/services/posts.service';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: Array<Post>;

  constructor(private titleService: Title, private postService: PostsService) { 
    
  }

  ngOnInit() {
    this.setTitle('Blog');
    this.loadPosts();
  }

  public setTitle( newTitle: string) {
    let finalTitle = 'Nate LaClaire';
    if (newTitle!='Home') {
      finalTitle = `${newTitle} - ${finalTitle}`;
    }
    this.titleService.setTitle( finalTitle );
  }

  loadPosts(){
    this.postService.loadPosts().subscribe(
        response => {
            this.posts = response;
        }
    );
}

}
