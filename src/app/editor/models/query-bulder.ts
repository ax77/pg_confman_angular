import { CounterService } from '../shared/services/counter.service';
import { Field, Table } from './table';

export class QueryBuilder {

  private readonly _dbTables: Table[] = [];
  private readonly _selectedTables: Table[] = [];
  private readonly _selectedFields: Field[] = [];

  private fillMockData() {

    let tables = [new Table('File Locations'),
    new Table('Connections and Authentication'),
    new Table('Resource Consumption'),
    new Table('Write Ahead Log'),
    new Table('Replication'),
    new Table('Query Planning'),
    new Table('Error Reporting and Logging'),
    new Table('Run-time Statistics'),
    new Table('Automatic Vacuuming'),
    new Table('Client Connection Defaults'),
    new Table('Lock Management'),
    new Table('Version and Platform Compatibility'),
    new Table('Error Handling'),
    new Table('Preset Options'),
    new Table('Customized Options'),
    new Table('Developer Options'),
    new Table('Short Options')];
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
