import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from "./shared/components/header/header.component";
import {NgOptimizedImage} from "@angular/common";
import {MariosGridComponent} from './shared/components/marios-grid/marios-grid.component';
import {HomeSiteComponent} from './core/sites/home-site/home-site.component';
import {
  ButtonToSentAndReceivedMariosComponent
} from './core/sites/home-site/addidional-components/button-to-sent-and-received-marios/button-to-sent-and-received-marios.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MariosGridComponent,
    HomeSiteComponent,
    ButtonToSentAndReceivedMariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
