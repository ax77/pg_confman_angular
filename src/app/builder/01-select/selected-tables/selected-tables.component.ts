import { Component, OnInit } from '@angular/core';
import {SelectService} from "../../services/select.service";
import {Field, Table} from "../../models/Tables";

@Component({
  selector: 'app-selected-tables',
  templateUrl: './selected-tables.component.html',
  styleUrls: ['./selected-tables.component.scss']
})
export class SelectedTablesComponent implements OnInit {

  constructor(public selectService: SelectService) { }

  ngOnInit(): void {
  }

  unfoldTable(t: Table) {
    t.selected = !t.selected;
  }

  foldTable(t: Table) {
    t.selected = !t.selected;
  }

  onSelectedTables_fieldName_dblclick(f: Field) {
    this.selectService.addSelectedFields(f);
  }

  onSelectedTables_tableName_dblclick(t: Table) {
    for(let f of t.fields) {
      this.selectService.addSelectedFields(f);
    }
  }
}
