import {Component, Input, OnInit} from '@angular/core';
import {GenericTableDto} from "../../../../models/auth/generic-table-dto";
import {QueriesService} from "../../../../services/queries/queries.service";

@Component({
  selector: 'app-additional-query',
  templateUrl: './additional-query.component.html',
  styleUrls: ['./additional-query.component.scss']
})
export class AdditionalQueryComponent implements OnInit {

  public _showQuery: boolean = true;
  public _showTable: boolean = false;

  public _data: GenericTableDto = new GenericTableDto([], []);
  public _hideEverything: boolean = false;
  public _queryText: string = 'select * from pg_stat_activity limit 3';

  constructor(private queriesService: QueriesService) {
  }

  ngOnInit(): void {
  }

  onHideLeft() {
    this._hideEverything = true;
  }

  onShowTableQuery() {
    this._showQuery = !this._showQuery;
    this._showTable = !this._showTable;

    if(this._showTable) {
      this._data.clear();
      let response = this.queriesService.executeQuery(this._queryText).subscribe((res) => {
        for (let h of res.result.fields) {
          this._data.addColumn(h.ColumnName);
        }
        for (let r of res.result.rows) {
          let row: string[] = []
          // @ts-ignore
          Object.values(r).forEach(val => row.push(val.toString()));

          this._data.addRow(row);
        }
      })
    }
  }

  doTextareaValueChange(event: any) {
    this._queryText = event.target.value.trim();
  }
}
