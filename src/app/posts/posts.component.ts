import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import toastr from 'toastr';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  editable = false;
  showForm = false;
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
  
  savePost(f) {
    console.log(f);
    if(f.valid) {
      this.postService.persistPost(this.myPost)
      .subscribe(res => {
         this.posts.unshift(res);
         this.initPost()
         toastr.success("This post is created Successfully")
         this.showForm = false
      }, 
      (err) => {
        toastr.error(err.message)
      });
    }else {
      toastr.error('Sir tan3ass')
    }
   
  }

  removePost(id, index) {
    this.postService.deletePost(id)
        .subscribe(res => {
       this.posts.splice(index, 1);
       toastr.success("This post is deleted Successfully")
    },
    (err) => toastr.error(err.message))
  }

  initPost() {
    this.myPost = {
      id: 0,
      title: '',
      body: ''
    }
  }

  editPost(post) {
    this.myPost = post;
    this.editable = true;
    this.showForm = true;
  }

  updatePost() {
    this.postService.updatePost(this.myPost)
                    .subscribe(res => {
                      console.log(res)
                      this.editable = false;
                      this.showForm = false;
                      this.initPost();
                      toastr.info("This post is updated Successfully")
                    })
  }

  log(myTitle) {
    console.log(myTitle);
  }

}
