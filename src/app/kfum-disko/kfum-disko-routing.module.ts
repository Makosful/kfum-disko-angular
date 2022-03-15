import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MemberListComponent} from "./members/member-list/member-list.component";
import {MemberCreateComponent} from "./members/member-create/member-create.component";
import {ArrangementListComponent} from "./arrangements/arrangement-list/arrangement-list.component";
import {ArrangementCreateComponent} from "./arrangements/arrangement-create/arrangement-create.component";
import {ArrangementActivateComponent} from "./arrangements/arrangement-activate/arrangement-activate.component";

const routes: Routes = [
  {path: '', component: MemberListComponent},
  {path: 'list', component: MemberListComponent},
  {path: 'create', component: MemberCreateComponent},
  {path: 'arrangements', component: ArrangementListComponent},
  {path: 'arrangements/create', component: ArrangementCreateComponent},
  {path: 'arrangements/activate', component: ArrangementActivateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KfumDiskoRoutingModule {
}
