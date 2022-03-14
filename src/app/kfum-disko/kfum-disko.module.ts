import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {MemberListComponent} from './members/member-list/member-list.component';
import {MemberCreateComponent} from './members/member-create/member-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ArrangementListComponent } from './arrangements/arrangement-list/arrangement-list.component';


@NgModule({
  declarations: [
    MemberListComponent,
    MemberCreateComponent,
    ArrangementListComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
  ]
})
export class KfumDiskoModule {
}
