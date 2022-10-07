import {Component, OnInit} from '@angular/core';
import {SelectService} from "../../../services/select.service";
import {Field, Table} from "../../../models/table";
import {QueriesService} from "../../../services/queries/queries.service";
import {GenericTableDto} from "../../../models/auth/generic-table-dto";

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss']
})
export class QueriesComponent implements OnInit {

  public readonly _showLeftQuery = '_showLeftQuery';
  public readonly _showRightQuery = '_showRightQuery';
  public readonly _showMainQuery = '_showMainQuery';

  public readonly showTableTopLeft = 'showTableTopLeft';
  public readonly showTableTopRight = 'showTableTopRight';
  public readonly showTableBottom = 'showTableBottom';

  public readonly _additionalQueryLeftLocation = 'top-left';
  public readonly _additionalQueryRightLocation = 'top-right';
  public readonly _mainQueryLocation = 'bottom';

  public readonly _hideLeftAdditionalQuery = '_hideLeftAdditionalQuery';
  public readonly _hideRightAdditionalQuery = '_hideRightAdditionalQuery';

  settings: Map<string, boolean> = new Map<string, boolean>();

  public _mainDto: GenericTableDto = new GenericTableDto([], []);
  public _leftDto: GenericTableDto = new GenericTableDto([], []);
  public _rightDto: GenericTableDto = new GenericTableDto([], []);

  public mainTextareaQuery = 'select * from pg_stat_activity';
  public leftTextareaQuery = 'select * from pg_stat_activity limit 1';
  public rightTextareaQuery = 'select * from pg_stat_activity limit 2';

  constructor(public selectService: SelectService, private queriesService: QueriesService) {
    this.settings.set(this._showLeftQuery, true);
    this.settings.set(this._showRightQuery, true);
    this.settings.set(this._showMainQuery, true);
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
    for (let f of flags) {
      this.settings.set(f, !this.settings.get(f));
    }
  }

  onShowTableQuery(location: string) {

    if (location === this._additionalQueryLeftLocation) {
      this._leftDto.clear();
    }
    if (location === this._additionalQueryRightLocation) {
      this._rightDto.clear();
    }
    if (location === this._mainQueryLocation) {
      this._mainDto.clear();
    }

    let q = '';
    if (location === this._additionalQueryLeftLocation) {
      q = this.leftTextareaQuery.trim();
    }
    if (location === this._additionalQueryRightLocation) {
      q = this.rightTextareaQuery.trim();
    }
    if (location === this._mainQueryLocation) {
      q = this.mainTextareaQuery.trim();
    }

    let response = this.queriesService.executeQuery(q).subscribe((res) => {
      console.log(res)
      for (let h of res.result.fields) {
        if (location === this._additionalQueryLeftLocation) {
          this._leftDto.addColumn(h.ColumnName);
        }
        if (location === this._additionalQueryRightLocation) {
          this._rightDto.addColumn(h.ColumnName);
        }
        if (location === this._mainQueryLocation) {
          this._mainDto.addColumn(h.ColumnName);
        }
      }
      for (let r of res.result.rows) {
        let row: string[] = []
        // @ts-ignore
        Object.values(r).forEach(val => row.push(val.toString()));


        if (location === this._additionalQueryLeftLocation) {
          this._leftDto.addRow(row);
        }
        if (location === this._additionalQueryRightLocation) {
          this._rightDto.addRow(row);
        }
        if (location === this._mainQueryLocation) {
          this._mainDto.addRow(row);
        }
      }
    })

    if (location === this._additionalQueryLeftLocation) {
      this.invertFlags([this.showTableTopLeft, this._showLeftQuery]);
    }

    if (location === this._additionalQueryRightLocation) {
      this.invertFlags([this.showTableTopRight, this._showRightQuery]);
    }

    if (location === this._mainQueryLocation) {
      this.invertFlags([this.showTableBottom, this._showMainQuery]);
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

  doTextareaValueChange(location: string, event: any) {
    try {
      if (location === this._mainQueryLocation) {
        this.mainTextareaQuery = event.target.value.trim();
      }
      if (location === this._additionalQueryLeftLocation) {
        this.leftTextareaQuery = event.target.value.trim();
      }
      if (location === this._additionalQueryRightLocation) {
        this.rightTextareaQuery = event.target.value.trim();
      }
    } catch (e) {
      console.info('could not set textarea-value');
    }
  }
}
