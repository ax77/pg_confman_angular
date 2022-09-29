import {Component, OnInit} from '@angular/core';
import {SelectService} from "../services/select.service";
import {JoinItem} from "../models/JoinItem";
import {CounterService} from "../services/counter.service";

@Component({
  selector: 'app-joins',
  templateUrl: './joins.component.html',
  styleUrls: ['./joins.component.scss']
})
export class JoinsComponent implements OnInit {

  constructor(public selectService: SelectService, private counter: CounterService) {
  }

  ngOnInit(): void {
  }

  onLeftTableSelect(event: any, joinItemId: number) {
    let table = this.selectService.findSelectedTableOrReturnAnEmptyOne(event.target.value);
    let joinItem = this.selectService.getJoinItemByIdOrThrow(joinItemId);
    joinItem.lhsTable = table;
  }

  onRightTableSelect(event: any, joinItemId: number) {
    let table = this.selectService.findSelectedTableOrReturnAnEmptyOne(event.target.value);
    let joinItem = this.selectService.getJoinItemByIdOrThrow(joinItemId);
    joinItem.rhsTable = table;
  }

  addJoinItem() {
    // TODO:joins
    this.selectService.addJoinItem(new JoinItem(this.counter.getNext()));
  }

  onJoinTypeChange(event: any, joinItemId: number) {
    let joinItem = this.selectService.getJoinItemByIdOrThrow(joinItemId);
    joinItem.joinType = event.target.value;
  }

  onLeftFieldSelect(event: any, joinItemId: number) {
    let joinItem = this.selectService.getJoinItemByIdOrThrow(joinItemId);
    if (joinItem.lhsTable && joinItem.lhsTable.tableName) {
      let field = joinItem.lhsTable.findFieldForSure(event.target.value);
      joinItem.lhsField = field;
    }
  }

  onRightFieldSelect(event: any, joinItemId: number) {
    let joinItem = this.selectService.getJoinItemByIdOrThrow(joinItemId);
    if (joinItem.rhsTable && joinItem.rhsTable.tableName) {
      let field = joinItem.rhsTable.findFieldForSure(event.target.value);
      joinItem.rhsField = field;
    }
  }

  onConditionChange(event: any, joinItemId: number) {
    let joinItem = this.selectService.getJoinItemByIdOrThrow(joinItemId);
    joinItem.condition = event.target.value;
  }
}
