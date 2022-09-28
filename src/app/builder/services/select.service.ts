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
    this.selectedTables = [
      ...this.selectedTables, table
    ]
  }

  private fillMockData() {
    let tables = [
      new Table('users', [new Field('user_id'), new Field('username'), new Field('password')]),
      new Table('roles', [new Field('role_id'), new Field('authority')]),
    ];
    for(let i=0; i<32; i++) {
      tables.push(new Table('users_' + i.toString(), [new Field('user_id'), new Field('username'), new Field('password')]));
    }
    this._dbTables.next(tables);
  }

  constructor() {
    this.fillMockData();
  }
}
