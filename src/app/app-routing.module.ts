import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SelectComponent} from "./builder/01-select/select.component";
import {JoinsComponent} from "./builder/02-joins/joins.component";

const routes: Routes = [
  {path: '', component: SelectComponent},
  {path: 'joins', component: JoinsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
