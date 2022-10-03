import { CounterService } from '../services/counter.service';
import { JoinItem } from './join-item';
import { Field, Table } from './table';

export class QueryBuilder {

  private readonly _dbTables: Table[] = [];
  private readonly _selectedTables: Table[] = [];
  private readonly _selectedFields: Field[] = [];
  private readonly _joinItems: JoinItem[] = [];

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
    for(let t of tables) {
        this.addDbTables(t);
    }
  }

  constructor(private counter: CounterService) {
    this.fillMockData();
  }

  //////////////////////////////////////////////////////////////////////
  // 01 - database tables
  get dbTables(): Table[] {
    return this._dbTables;
  }

  addDbTables(table: Table) {
    this.dbTables.push(table);
  }

  //////////////////////////////////////////////////////////////////////
  // 02 - selected tables
  get selectedTables() {
    return this._selectedTables;
  }

  addSelectedTables(table: Table) {
    let cloned = new Table(this.getTableNameAsAlias(table.tableName));
    for (let field of table.fields) {
      cloned.addField(field.fieldName);
    }
    this.selectedTables.push(cloned);
  }

  hasTableInSelectedTables(tableName: string): boolean {
    for (let t of this.selectedTables) {
      if (t.tableName === tableName) {
        return true;
      }
    }
    return false;
  }

  findSelectedTableOrReturnAnEmptyOne(tableName: string): Table {
    for(let t of this.selectedTables) {
      if(t.tableName === tableName) {
        return t;
      }
    }
    return new Table('');
  }

  //////////////////////////////////////////////////////////////////////
  // 03 - selected fields
  get selectedFields(): Field[] {
    return this._selectedFields;
  }

  addSelectedFields(field: Field) {
    this.selectedFields.push(this.getFieldNameAsAlias(field));
  }

  hasFieldInSelectedFields(f: Field): boolean {
    for (let selectedField of this.selectedFields) {
      if (selectedField.fieldName === f.fieldName) {
        if (selectedField.ownerTable.tableName === f.ownerTable.tableName) {
          return true;
        }
      }
    }
    return false;
  }

  //////////////////////////////////////////////////////////////////////
  // 04 - joins
  
  get joinItems(): JoinItem[] {
    return this._joinItems;
  }

  addJoinItem(item: JoinItem) {
    this.joinItems.push(item);
  }

  getJoinItemByIdOrThrow(id: number): JoinItem {
    for(let item of this.joinItems) {
      if(item.id == id) {
        return item;
      }
    }
    throw new Error(`Cannot assign join type for id ${id}`);
  }

  //////////////////////////////////////////////////////////////////////
  // aliases
  getTableNameAsAlias(tableName: string): string {

    // return the original name
    if (!this.hasTableInSelectedTables(tableName)) {
      return tableName;
    }

    // return the alias name, i.e. by adding a counter after the original name
    return tableName + this.counter.getNext().toString();
  }

  getFieldNameAsAlias(field: Field): Field {
    if (!this.hasFieldInSelectedFields(field)) {
      return field;
    }

    let asiasFieldName = field.fieldName + this.counter.getNext().toString();
    return new Field(asiasFieldName, field.ownerTable);
  }
}
