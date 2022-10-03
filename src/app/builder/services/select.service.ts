import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CounterService } from './counter.service';
import { QueryBuilder } from '../models/query-bulder';
import { Field, Table } from '../models/table';

@Injectable({
  providedIn: 'root',
})
export class SelectService {

  constructor(private counter: CounterService) {
  }

  private readonly _queryBuilder = new BehaviorSubject<QueryBuilder>(new QueryBuilder(this.counter));
  readonly queryBuilder$ = this._queryBuilder.asObservable();

  public get queryBuilder(): QueryBuilder {
    return this._queryBuilder.getValue();
  }

}
