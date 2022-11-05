import { Component, OnInit } from '@angular/core';
import { PgSettings, PgSettingsEntry } from '../editor/models/settings';
import { QueriesService } from '../editor/services/queries.service';

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
    console.log(this.settings);

  }

  onSettingClick(e: any) {
    for(let s of this.settings) {
      s.visible = false;
    }

    let id = e.target.id;
    for(let s of this.settings) {
      if(s.id === id) {
        this.currentSetting = s;
        s.visible = !s.visible;
      }
    }
  }

  onSettingItemClick(event: any) {
    let id = event.target.id;

    for(let elem of this.settings) {
      if(elem.children.length > 0) {
        for(let child of elem.children) {
          for(let s of child.settings) {
            if(s.name === id) {
              s.showDocs = !s.showDocs;
            }
          }
        }
      } else {
        for(let s of elem.settings) {
          if(s.name === id) {
            s.showDocs = !s.showDocs;
          }
        }
      }
    }

  }

  showDoc(e: PgSettingsEntry) {
    for(let elem of this.settings) {
      if(elem.children.length > 0) {
        for(let child of elem.children) {
          for(let s of child.settings) {
            if(s.name === e.name) {
              return s.showDocs;
            }
          }
        }
      } else {
        for(let s of elem.settings) {
          if(s.name === e.name) {
            return s.showDocs;
          }
        }
      }
    }
    return false;
  }

  onInputChange(e: any) {
    // e.target.id, e.target.value
    let m = new Map<string, string>();
    m.set('1', '1');
    console.log(m.get('1'));
    console.log(m.get('2'));

  }

}
