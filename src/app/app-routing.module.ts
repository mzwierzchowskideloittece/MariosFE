import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeSiteComponent} from "./core/sites/home-site/home-site.component";
import {AddMariosSiteComponent} from "./core/sites/add-marios-site/add-marios-site.component";
import {DisplayMariosComponent} from "./core/sites/display-marios/display-marios.component";
import {AuthGuard} from "./utility/app.guard";

const routes: Routes = [
  { path: '', component: HomeSiteComponent,
    canActivate: [AuthGuard]},
  { path: 'add', component: AddMariosSiteComponent,
    canActivate: [AuthGuard]},
  { path: 'received', component: DisplayMariosComponent,
    canActivate: [AuthGuard]},
  { path: 'sent', component: DisplayMariosComponent,
    canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
