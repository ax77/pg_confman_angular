import { Component, OnInit } from '@angular/core';
import {SelectService} from "../../services/select.service";
import {Table} from "../../models/Tables";

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
}
