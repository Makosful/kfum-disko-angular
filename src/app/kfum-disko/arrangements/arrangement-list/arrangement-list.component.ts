import {Component, OnInit} from '@angular/core';
import {Apollo, gql} from "apollo-angular";
import {Arrangement} from '../../../shared/models/arrangement'

@Component({
  selector: 'app-arrangement-list',
  templateUrl: './arrangement-list.component.html',
  styleUrls: ['./arrangement-list.component.scss']
})
export class ArrangementListComponent implements OnInit {

  arrangements: Arrangement[] = [];

  constructor(
    private apollo: Apollo,
  ) {
  }

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: gql`
        query{
          arrangements {
            id
            isActive
            title
            date
          }
        }`,
      })
      .valueChanges.subscribe((c: any) => {
      this.arrangements = c.data.arrangements;
    });
  }

}
