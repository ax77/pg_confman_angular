import {Field, Table} from "./table";

export class JoinItem {

  // ...
  // from users
  //      ^lhsTable
  // join users_roles on users.user_id =  user_roles.user_id
  // ^ t  ^rhsTable      ^lhsField     ^c ^rhsTable

  private readonly _id: number;
  private _joinType: string = '';
  private _lhsTable: Table = new Table('');
  private _rhsTable: Table = new Table('');
  private _lhsField: Field = new Field('', new Table(''));
  private _condition: string = '';
  private _rhsField: Field = new Field('', new Table(''));

  constructor(id: number) {
    this._id = id;
  }

  get id(): number {
    return this._id;
  }

  get joinType(): string {
    return this._joinType;
  }

  set joinType(value: string) {
    this._joinType = value;
  }

  get lhsTable(): Table {
    return this._lhsTable;
  }

  set lhsTable(value: Table) {
    this._lhsTable = value;
  }

  get rhsTable(): Table {
    return this._rhsTable;
  }

  set rhsTable(value: Table) {
    this._rhsTable = value;
  }

  get lhsField(): Field {
    return this._lhsField;
  }

  set lhsField(value: Field) {
    this._lhsField = value;
  }

  get condition(): string {
    return this._condition;
  }

  set condition(value: string) {
    this._condition = value;
  }

  get rhsField(): Field {
    return this._rhsField;
  }

  set rhsField(value: Field) {
    this._rhsField = value;
  }
}
