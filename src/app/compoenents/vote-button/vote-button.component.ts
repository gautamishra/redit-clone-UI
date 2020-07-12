import { Component, OnInit, Input } from '@angular/core';
import { PostModel } from 'src/app/model';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.scss']
})
export class VoteButtonComponent implements OnInit {

  @Input() post: PostModel;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;



  constructor() { }

  ngOnInit(): void {
  }

}
