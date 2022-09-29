export class Field {
  constructor(public fieldName: string, public ownerTableName: string) {
  }
}

export class Table {
  public selected: boolean = false;
  public fields: Field[] = [];

  constructor(public tableName: string) {
  }

  addField(fieldName: string) {
    this.fields.push(new Field(fieldName, this.tableName))
  }
}
