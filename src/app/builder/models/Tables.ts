export class Field {
  constructor(public name: string) {
  }
}

export class Table {
  constructor(public name: string, public fields: Field[]) {
  }
}
