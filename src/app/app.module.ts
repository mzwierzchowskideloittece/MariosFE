import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./shared/components/header/header.component";
import {AsyncPipe, NgFor, NgOptimizedImage} from "@angular/common";
import { MariosGridComponent } from './shared/components/marios-grid/marios-grid.component';
import { HomeSiteComponent } from './core/sites/home-site/home-site.component';
import { ButtonToSentAndReceivedMariosComponent } from './core/sites/home-site/addidional-components/button-to-sent-and-received-marios/button-to-sent-and-received-marios.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { AddMariosSiteComponent } from './core/sites/add-marios-site/add-marios-site.component';

import { MatChipsModule } from "@angular/material/chips";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { DisplayMariosComponent } from './core/sites/display-marios/display-marios.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MariosGridComponent,
    HomeSiteComponent,
    ButtonToSentAndReceivedMariosComponent,
    AddMariosSiteComponent,
    DisplayMariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    NgFor,
    AsyncPipe,
    FormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
