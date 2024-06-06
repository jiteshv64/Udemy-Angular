import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CounterService } from '../counter.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrl: './inactive-users.component.css'
})
export class InactiveUsersComponent {
  @Input() users: string[] = [];
  // @Output() userSetToActive = new EventEmitter<number>();

  constructor(private userService: UserService,
    public counterService: CounterService) { }

  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
    this.counterService.inactiveToActive()
  }
}
