export class Field {
  constructor(public fieldName: string, public ownerTable: Table, public datatype = 'integer') {
  }
}

export class Table {
  // TODO: these are not necessary, for debug purpose only, we do not need to keep them here later...
  public selected: boolean = false;
  public highlighted: boolean = false;

  public fields: Field[] = [];

  constructor(public tableName: string) {
  }

  addField(fieldName: string) {
    this.fields.push(new Field(fieldName, this))
  }

  findFieldForSure(fieldName: string): Field {
    for(let f of this.fields) {
      if(f.fieldName == fieldName) {
        return f;
      }
    }
    throw new Error(`Cannot find field with the name: ${fieldName}`);
  }
}
