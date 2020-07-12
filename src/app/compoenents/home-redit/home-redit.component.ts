import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/model/post.model';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-home-redit',
  templateUrl: './home-redit.component.html',
  styleUrls: ['./home-redit.component.scss']
})
export class HomeReditComponent implements OnInit {

  posts$: Array<PostModel> = [];


  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }


  getAllPosts() {
   this.postService.getAllPosts()
   .subscribe((post) => {
     this.posts$ = post;
   });
  }
}
