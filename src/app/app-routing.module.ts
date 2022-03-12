import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardedComponent } from "./guarded/guarded.component";
import { HomeComponent } from "./home/home.component";
import {AuthGuard} from "./utils/app.auth";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, },
  { path: 'guarded', component: GuardedComponent, canActivate:[AuthGuard] },
  {
    path: 'members',
    loadChildren: () => import('./kfum-disko/kfum-disko-routing.module').then(mod => mod.KfumDiskoRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
