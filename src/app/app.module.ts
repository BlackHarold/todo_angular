import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CategoriesComponent } from './views/categories/categories.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
