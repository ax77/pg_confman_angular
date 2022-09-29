import { Component, OnInit } from '@angular/core';
import {SelectService} from "../services/select.service";
import {Event} from "@angular/router";

@Component({
  selector: 'app-joins',
  templateUrl: './joins.component.html',
  styleUrls: ['./joins.component.scss']
})
export class JoinsComponent implements OnInit {

  constructor(public selectService: SelectService) { }

  ngOnInit(): void {
  }

  onLeftTableSelect(event: any) {
    this.selectService.lhsTable = this.selectService.findSelectedTableOrReturnAnEmptyOne(event.target.value);
  }

  onRightTableSelect(event: any) {
    this.selectService.rhsTable = this.selectService.findSelectedTableOrReturnAnEmptyOne(event.target.value);
  }

}
