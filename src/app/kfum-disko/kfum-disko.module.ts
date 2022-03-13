import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MemberListComponent} from './members/member-list/member-list.component';
import {BrowserModule} from "@angular/platform-browser";
import {MemberCreateComponent} from './members/member-create/member-create.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MemberListComponent
    MemberCreateComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
  ]
})
export class KfumDiskoModule {
}
