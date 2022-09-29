import { Component, OnInit } from '@angular/core';
import {SelectService} from "../services/select.service";
import {Event} from "@angular/router";
import {JoinItem} from "../models/JoinItem";
import {CounterService} from "../services/counter.service";

@Component({
  selector: 'app-joins',
  templateUrl: './joins.component.html',
  styleUrls: ['./joins.component.scss']
})
export class JoinsComponent implements OnInit {

  constructor(public selectService: SelectService, private counter: CounterService) { }

  ngOnInit(): void {
  }

  onLeftTableSelect(event: any) {
    // this.selectService.lhsTable = this.selectService.findSelectedTableOrReturnAnEmptyOne(event.target.value);
  }

  onRightTableSelect(event: any) {
    // this.selectService.rhsTable = this.selectService.findSelectedTableOrReturnAnEmptyOne(event.target.value);
  }

  addJoinItem() {
    // TODO:joins
    this.selectService.addJoinItem(new JoinItem(this.counter.getNext()));
  }

  onJoinTypeChange(event: any, joinItemId: number) {
    let joinItem = this.selectService.getJoinItemByIdOrThrow(joinItemId);
    joinItem.joinType = event.target.value;
  }
}
