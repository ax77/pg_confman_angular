import { Component, OnInit } from '@angular/core';
import {SelectService} from "../../services/select.service";
import {Field, Table} from "../../models/Tables";

@Component({
  selector: 'app-database-tables',
  templateUrl: './database-tables.component.html',
  styleUrls: ['./database-tables.component.scss']
})
export class DatabaseTablesComponent implements OnInit {

  // 1) double click on table name -> add the table to selected-tables
  // 1.1) if this table is already present in selected-tables, it means that we need to add an alias
  // 2) double click on field name -> add clicked field to selected fields, and add the table-owner to selected-tables.
  // 2.1) if the field name is already present in selected-fields, we need to add an alias.
  // 3) single click on table name -> highlight
  // 4) single click on field name -> highlight

  constructor(public selectService: SelectService ) { }

  ngOnInit(): void {
  }

  getRandomId() {
    return Math.floor((Math.random()*6)+1);
  }

  addMockTable() {
    let table = new Table('users');
    table.addField('user_id');
    table.addField('username');
    table.addField('password');

    this.selectService.addDbTables(table);
  }

  onDatabaseTables_tableName_dblclick(t: Table) {
    this.selectService.addSelectedTables(t);
  }

  onDatabaseTables_tableName_click(t: Table) {

  }

  onDatabaseTables_fieldName_dblclick(f: Field) {
    console.log(f)
  }

  onDatabaseTables_fieldName_click(f: Field) {
    console.log(f)
  }

  unfoldTable(t: Table) {
    t.selected = !t.selected;
  }

  foldTable(t: Table) {
    t.selected = !t.selected;
  }
}
