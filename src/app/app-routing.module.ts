import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeSiteComponent} from "./core/sites/home-site/home-site.component";
import {AddMariosSiteComponent} from "./core/sites/add-marios-site/add-marios-site.component";

const routes: Routes = [
  { path: '', component: HomeSiteComponent },
  { path: 'add', component: AddMariosSiteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
