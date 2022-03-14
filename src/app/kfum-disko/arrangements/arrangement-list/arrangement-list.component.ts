import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrangement-list',
  templateUrl: './arrangement-list.component.html',
  styleUrls: ['./arrangement-list.component.scss']
})
export class ArrangementListComponent implements OnInit {

  arrangements: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.arrangements = [{
      date: new Date(),
      isLocked: false,
      title: 'Foobar',
      type: 'disko',
      ticket: null,
      helpers: []
    }];
  }

}
