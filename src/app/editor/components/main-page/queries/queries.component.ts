import {Component, OnInit} from '@angular/core';
import {Field, Table} from "../../../models/table";
import {QueriesService} from "../../../services/queries.service";
import {GenericTableDto} from "../../../models/generic-table-dto";

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss']
})
export class QueriesComponent {
  public _showQuery: boolean = true;
  public _showTable: boolean = false;

  public _data: GenericTableDto = new GenericTableDto([], []);

  public _queryText: string = `select * from
pg_settings
order by category, name
  `;

  public _errorMessage: string = '';

  constructor(private queriesService: QueriesService) {
  }

  ngOnInit(): void {
  }


  onShowTableQuery() {
    this._showQuery = !this._showQuery;
    this._showTable = !this._showTable;

    if(this._showTable) {
      this._data.clear();
      this._errorMessage = '';

      let response = this.queriesService.executeQuery(this._queryText).subscribe((res) => {
        this._errorMessage = res.result.errorMessage == undefined ? '' : res.result.errorMessage;

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

  queryOnKeyDown(e: any) {
    if (e.key == 'Tab') {
      e.preventDefault();
      var start = e.target.selectionStart;
      var end = e.target.selectionEnd;

      // set textarea value to: text before caret + tab + text after caret
      e.target.value = e.target.value.substring(0, start) +
        "    " + e.target.value.substring(end);

      // put caret at right position again
      e.target.selectionStart = e.target.selectionEnd = start + 4;
    }

  }
}
