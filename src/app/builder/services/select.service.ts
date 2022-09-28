import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Field, Table} from "../models/Tables";

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  private readonly _dbTables = new BehaviorSubject<Table[]>([]);
  readonly dbTables$: Observable<Table[]> = this._dbTables.asObservable();

  get dbTables(): Table[] {
    return this._dbTables.getValue();
  }

  private set dbTables(val: Table[]) {
    this._dbTables.next(val);
  }

  private fillMockData() {
    let tables = [
      new Table('users', [new Field('user_id'), new Field('username'), new Field('password')]),
      new Table('roles', [new Field('role_id'), new Field('authority')]),
    ];
    this._dbTables.next(tables);
  }

  addTable(table: Table) {
    this.dbTables = [
      ...this.dbTables,
      table
    ];
  }

  constructor() {
    this.fillMockData();
    console.log(this.dbTables$);
  }
}
