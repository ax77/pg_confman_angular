import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Field, Table} from "../models/Tables";
import {CounterService} from "./counter.service";

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  private readonly _dbTables = new BehaviorSubject<Table[]>([]);
  readonly dbTables$: Observable<Table[]> = this._dbTables.asObservable();

  private readonly _selectedTables = new BehaviorSubject<Table[]>([]);
  readonly selectedTables$ = this._selectedTables.asObservable();

  private readonly _selectedFields = new BehaviorSubject<Field[]>([]);
  readonly selectedFields$ = this._selectedFields.asObservable();

  get dbTables(): Table[] {
    return this._dbTables.getValue();
  }

  get selectedTables(): Table[] {
    return this._selectedTables.getValue();
  }

  get selectedFields(): Field[] {
    return this._selectedFields.getValue();
  }

  private set dbTables(val: Table[]) {
    this._dbTables.next(val);
  }

  private set selectedTables(val: Table[]) {
    this._selectedTables.next(val);
  }

  private set selectedFields(val: Field[]) {
    this._selectedFields.next(val);
  }

  addDbTables(table: Table) {
    this.dbTables = [
      ...this.dbTables, table
    ];
  }

  addSelectedTables(table: Table) {
    let cloned = new Table(this.getTableNameAsAlias(table.tableName));
    for(let field of table.fields) {
      cloned.addField(field.fieldName);
    }

    this.selectedTables = [
      ...this.selectedTables, cloned
    ]
  }

  addSelectedFields(field: Field) {
    this.selectedFields = [
      ...this.selectedFields, field
    ];
  }

  // util
  getTableNameAsAlias(tableName: string) {

    // TODO: clean-code
    let contains = false;
    for(let t of this.selectedTables) {
      if(t.tableName == tableName) {
        contains = true;
        break;
      }
    }

    // return the original name
    if(!contains) {
      return tableName;
    }

    // return the alias name, i.e. by adding a counter after the original name
    return tableName + this.counter.getNext().toString();
  }

  private fillMockData() {
    let usersTable = new Table('users');
    usersTable.addField('user_id');
    usersTable.addField('username');
    usersTable.addField('password');

    let rolesTable = new Table('roles');
    rolesTable.addField('role_id');
    rolesTable.addField('authority');

    let userHasRolesTable = new Table('user_has_roles');
    userHasRolesTable.addField('user_has_roles_id');
    userHasRolesTable.addField('user_id');
    userHasRolesTable.addField('role_id');

    let tables = [usersTable, rolesTable, userHasRolesTable];
    this._dbTables.next(tables);
  }

  constructor(private counter: CounterService) {
    this.fillMockData();
  }
}
