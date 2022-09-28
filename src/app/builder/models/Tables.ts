export class Field {
  constructor(public name: string) {
  }
}

export class Table {
  public selected: boolean = false;
  constructor(public name: string, public fields: Field[]) {
  }
}
