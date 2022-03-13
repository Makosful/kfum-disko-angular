import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MemberListComponent} from "./members/member-list/member-list.component";
import {MemberCreateComponent} from "./members/member-create/member-create.component";

const routes: Routes = [
  {path: '', component: MemberListComponent},
  {path: 'create', component: MemberCreateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KfumDiskoRoutingModule {
}
