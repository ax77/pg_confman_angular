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
    this.selectService.addTable(new Table('users' + this.getRandomId().toString(), [new Field('user_id'), new Field('username'), new Field('password')]))
  }
}
