import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Field, Table} from "../models/Tables";

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  private readonly _dbTables = new BehaviorSubject<Table[]>([]);
  readonly dbTables$: Observable<Table[]> = this._dbTables.asObservable();

  private readonly _selectedTables = new BehaviorSubject<Table[]>([]);
  readonly selectedTables$ = this._selectedTables.asObservable();

  get dbTables(): Table[] {
    return this._dbTables.getValue();
  }

  get selectedTables(): Table[] {
    return this._selectedTables.getValue();
  }

  private set dbTables(val: Table[]) {
    this._dbTables.next(val);
  }

  private set selectedTables(val: Table[]) {
    this._selectedTables.next(val);
  }

  addDbTables(table: Table) {
    this.dbTables = [
      ...this.dbTables, table
    ];
  }

  addSelectedTables(table: Table) {
    let cloned = new Table(table.tableName);
    for(let field of table.fields) {
      cloned.addField(field.fieldName);
    }

    this.selectedTables = [
      ...this.selectedTables, cloned
    ]
  }

  private fillMockData() {
    let table = new Table('users');
    table.addField('user_id');
    table.addField('username');
    table.addField('password');

    let tables = [table];
    this._dbTables.next(tables);
  }

  constructor() {
    this.fillMockData();
  }
}
