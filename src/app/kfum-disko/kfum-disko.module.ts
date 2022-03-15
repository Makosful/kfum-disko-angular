import {AppRoutingModule} from "../app-routing.module";
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {MemberListComponent} from './members/member-list/member-list.component';
import {MemberCreateComponent} from './members/member-create/member-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ArrangementListComponent} from './arrangements/arrangement-list/arrangement-list.component';
import {ArrangementCreateComponent} from './arrangements/arrangement-create/arrangement-create.component';
import {ArrangementActivateComponent} from './arrangements/arrangement-activate/arrangement-activate.component';


@NgModule({
  declarations: [
    MemberListComponent,
    MemberCreateComponent,
    ArrangementListComponent,
    ArrangementCreateComponent,
    ArrangementActivateComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ]
})
export class KfumDiskoModule {
}
