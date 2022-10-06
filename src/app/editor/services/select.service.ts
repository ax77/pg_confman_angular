import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CounterService } from '../shared/services/counter.service';
import { QueryBuilder } from '../models/query-bulder';
import { Field, Table } from '../models/table';

@Injectable({
  providedIn: 'root',
})
export class SelectService {
  private readonly _queryBuilder = new BehaviorSubject<QueryBuilder>(new QueryBuilder(this.counter));
  readonly queryBuilder$ = this._queryBuilder.asObservable();

  constructor(private counter: CounterService) {
  }

  private get queryBuilder(): QueryBuilder {
    return this._queryBuilder.getValue();
  }

  addSelectedFields(f: Field) {
    this.queryBuilder.addSelectedFields(f);
  }

  hasTableInSelectedTables(tableName: string): boolean {
    return this.queryBuilder.hasTableInSelectedTables(tableName);
  }

  addSelectedTables(t: Table) {
    this.queryBuilder.addSelectedTables(t);
  }

  addDbTables(table: Table) {
    this.queryBuilder.addDbTables(table);
  }

  get dbTables(): Table[] {
    return this.queryBuilder.dbTables;
  }

  get selectedTables(): Table[] {
    return this.queryBuilder.selectedTables;
  }

  get selectedFields(): Field[] {
    return this.queryBuilder.selectedFields;
  }

  findSelectedTableOrReturnAnEmptyOne(tableName: string): Table {
    return this.queryBuilder.findSelectedTableOrReturnAnEmptyOne(tableName);
  }


}
