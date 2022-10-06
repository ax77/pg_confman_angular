export class GenericTableDto {

  constructor(public columns: string[], public rows: string[][]) {
  }

  public addColumn(name: string) {
    this.columns.push(name)
  }

  public addRow(row: string[]) {
    this.rows.push(row);
  }

  clear() {
    this.columns = []
    this.rows = []
  }
}
