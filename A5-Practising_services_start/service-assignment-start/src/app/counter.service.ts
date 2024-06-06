import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  active: number = 0;
  inactive: number = 0;

  constructor() { }

  activeToInactive() {
    this.active++;
  }

  inactiveToActive() {
    this.inactive++;
  }
}
