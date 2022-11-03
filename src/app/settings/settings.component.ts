import { Component, OnInit } from '@angular/core';
import { PgSettings } from '../editor/models/settings';
import { QueriesService } from '../editor/services/queries/queries.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  settings: PgSettings[] = []
  currentSetting: PgSettings = { title: '', id: '', children:[], settings: [], visible: false };

  constructor(private service: QueriesService) { }

  ngOnInit(): void {
    this.settings = this.service.getSettingsResult();
  }

  onSettingClick(e: any) {
    let id = e.target.id;
    for(let s of this.settings) {
      if(s.id === id) {
        this.currentSetting = s;
        s.visible = !s.visible;
      }
    }
  }

}
