import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeSiteComponent} from "./core/sites/home-site/home-site.component";
import {AddMariosSiteComponent} from "./core/sites/add-marios-site/add-marios-site.component";
import {DisplayMariosComponent} from "./core/sites/display-marios/display-marios.component";

const routes: Routes = [
  { path: '', component: HomeSiteComponent },
  { path: 'add', component: AddMariosSiteComponent},
  { path: 'received', component: DisplayMariosComponent},
  { path: 'sent', component: DisplayMariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
