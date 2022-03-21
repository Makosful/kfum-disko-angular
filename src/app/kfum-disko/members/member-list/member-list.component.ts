import {Component, OnInit} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {Member} from "../../../shared/models/member";

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  members: Member[] = [];

  constructor(
    private apollo: Apollo,
  ) {
  }

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: gql`
        query{
          member {
            id
            firstName
            lastName
          }
        }`,
      })
      .valueChanges.subscribe((c: any) => {
      this.members = c.data.member;
    });
  }

}
