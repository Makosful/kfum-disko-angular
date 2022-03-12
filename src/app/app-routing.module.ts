import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./shared/not-found/not-found.component";

const routes: Routes = [
  {path: '', redirectTo: 'members', pathMatch: 'full'},
  {
    path: 'members',
    loadChildren: () => import('./kfum-disko/kfum-disko-routing.module').then(mod => mod.KfumDiskoRoutingModule)
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
