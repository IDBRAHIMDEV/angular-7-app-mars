import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[] = [];
  myPost = {
    id: 0,
    title: '',
    body: ''
  }
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.recupPosts()
  }

  recupPosts() {
    this.postService.getAllPosts().subscribe((res: any[]) => {
      this.posts = res;
      console.log(res)
    });
  }

  savePost() {
    this.postService.persistPost(this.myPost)
                    .subscribe(res => {
                       this.posts.unshift(res);
                       this.initPost()
                    });
  }

  initPost() {
    this.myPost = {
      id: 0,
      title: '',
      body: ''
    }
  }

}
