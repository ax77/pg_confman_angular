import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectComponent } from './builder/select/select.component';
import { DatabaseTablesComponent } from './builder/select/database-tables/database-tables.component';
import { SelectedTablesComponent } from './builder/select/selected-tables/selected-tables.component';
import { SelectedFieldsComponent } from './builder/select/selected-fields/selected-fields.component';
import { UnionTabsComponent } from './builder/containers/union-tabs/union-tabs.component';
import { BuilderStepsTabsComponent } from './builder/containers/builder-steps-tabs/builder-steps-tabs.component';
import { HighlightDirective } from './builder/directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    DatabaseTablesComponent,
    SelectedTablesComponent,
    SelectedFieldsComponent,
    UnionTabsComponent,
    BuilderStepsTabsComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
