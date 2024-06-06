import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CounterService } from '../counter.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrl: './active-users.component.css',
})
export class ActiveUsersComponent {
  @Input() users: string[] = [];
  // @Output() userSetToInactive = new EventEmitter<number>();
  
  constructor(
    private userService: UserService,
    public counterService: CounterService
  ) {}

  onSetToInactive(id: number) {
    this.userService.onSetToInactive(id);
    this.counterService.activeToInactive();
  }
}
