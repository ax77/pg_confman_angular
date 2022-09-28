import { Component, OnInit } from '@angular/core';
import {SelectService} from "../../services/select.service";
import {Field, Table} from "../../models/Tables";

@Component({
  selector: 'app-database-tables',
  templateUrl: './database-tables.component.html',
  styleUrls: ['./database-tables.component.scss']
})
export class DatabaseTablesComponent implements OnInit {

  constructor(public selectService: SelectService ) { }

  ngOnInit(): void {
  }

  getRandomId() {
    return Math.floor((Math.random()*6)+1);
  }

  addMockTable() {
    this.selectService.addDbTables(new Table('users' + this.getRandomId().toString(), [new Field('user_id'), new Field('username'), new Field('password')]))
  }

  onDatabaseTables_tableName_dblclick(t: Table) {
    t.selected = !t.selected;
  }

  onDatabaseTables_tableName_click(t: Table) {

  }

  onDatabaseTables_fieldName_dblclick(f: Field) {
    console.log(f)
  }

  onDatabaseTables_fieldName_click(f: Field) {
    console.log(f)
  }
}
