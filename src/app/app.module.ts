import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './editor/components/main-page/main-page.component';
import { DatabaseTablesComponent } from './editor/components/main-page/database-tables/database-tables.component';
import { QueriesComponent } from './editor/components/main-page/queries/queries.component';
import {HttpClientModule} from "@angular/common/http";
import { AdditionalQueryComponent } from './editor/components/main-page/queries/additional-query/additional-query.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DatabaseTablesComponent,
    QueriesComponent,
    AdditionalQueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
