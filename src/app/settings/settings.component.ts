import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  resource_consumption = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSettingClick(e: any) {
    if(e.target.id === 'resource_consumption') {
      this.resource_consumption = !this.resource_consumption;
    }
  }

}
