import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter: number = 0;
  constructor() { }

  public getNext() {
    let c = this.counter;
    this.counter += 1;
    return c;
  }
}
