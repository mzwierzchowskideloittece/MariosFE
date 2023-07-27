import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeSiteComponent} from "./core/sites/home-site/home-site.component";

const routes: Routes = [
  { path: '', component: HomeSiteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
