import { Component, OnInit } from '@angular/core';
import {SelectService} from "../../../services/select.service";
import {Field, Table} from "../../../models/table";

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss']
})
export class QueriesComponent implements OnInit {

  public readonly showQueryTopLeft = 'showQueryTopLeft';
  public readonly showQueryTopRight = 'showQueryTopRight';
  public readonly showQueryBottom = 'showQueryBottom';

  public readonly showTableTopLeft = 'showTableTopLeft';
  public readonly showTableTopRight = 'showTableTopRight';
  public readonly showTableBottom = 'showTableBottom';

  public readonly _additionalQueryLeftLocation = 'top-left';
  public readonly _additionalQueryRightLocation = 'top-right';
  public readonly _mainQueryLocation = 'bottom';

  public readonly _hideLeftAdditionalQuery = '_hideLeftAdditionalQuery';
  public readonly _hideRightAdditionalQuery = '_hideRightAdditionalQuery';

  settings: Map<string, boolean> = new Map<string, boolean>();

  dummyNumbers = new Array(110);

  constructor(public selectService: SelectService) {
    this.settings.set(this.showQueryTopLeft, true);
    this.settings.set(this.showQueryTopRight, true);
    this.settings.set(this.showQueryBottom, true);
    this.settings.set(this.showTableTopLeft, false);
    this.settings.set(this.showTableTopRight, false);
    this.settings.set(this.showTableBottom, false);
  }

  ngOnInit(): void {
  }

  unfoldTable(t: Table) {
    t.selected = !t.selected;
  }

  foldTable(t: Table) {
    t.selected = !t.selected;
  }

  invertFlags(flags: string[]) {
    for(let f of flags) {
      this.settings.set(f, !this.settings.get(f));
    }
  }

  onShowTableQuery(location: string) {
    if(location === this._additionalQueryLeftLocation) {
      this.invertFlags([this.showTableTopLeft, this.showQueryTopLeft]);
    }

    if(location === this._additionalQueryRightLocation) {
      this.invertFlags([this.showTableTopRight, this.showQueryTopRight]);
    }

    if(location === this._mainQueryLocation) {
      this.invertFlags([this.showTableBottom , this.showQueryBottom]);
    }
  }

  onHideLeft() {
    this.invertFlags([this._hideLeftAdditionalQuery]);
  }

  onHideRight() {
    this.invertFlags([this._hideRightAdditionalQuery]);
  }

  hasFlag(f: string) {
    return this.settings.get(f);
  }
}
