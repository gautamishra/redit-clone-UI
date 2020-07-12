import { Component, OnInit, Input } from '@angular/core';
import { PostModel } from 'src/app/model/post.model';
import { faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.scss']
})
export class PostTileComponent implements OnInit {

  @Input() data: Array<PostModel>;
  faComments =faComments;

  constructor() { }

  ngOnInit(): void {
  }

}
