import { Component, OnInit } from '@angular/core';
import { SubredditModel } from 'src/app/model';
import { SubreditService } from 'src/app/service/subredit.service';

@Component({
  selector: 'app-subredit-side-bar',
  templateUrl: './subredit-side-bar.component.html',
  styleUrls: ['./subredit-side-bar.component.scss']
})
export class SubreditSideBarComponent implements OnInit {

  subreddits: Array<SubredditModel> = [];

  constructor(private subReditService: SubreditService) { }

  ngOnInit(): void {
    this.getAllSubredit();
  }

  getAllSubredit() {
    this.subReditService.getAllSubreddits()
    .subscribe((res) => {
      this.subreddits = res;
    });
  }
}
