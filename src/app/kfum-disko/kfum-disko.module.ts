import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MemberListComponent} from './members/member-list/member-list.component';
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [
    MemberListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ]
})
export class KfumDiskoModule {
}
