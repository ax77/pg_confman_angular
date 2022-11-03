import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./editor/components/main-page/main-page.component";
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
