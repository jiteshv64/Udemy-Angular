import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'service-assignment-start';

  constructor(private userService: UserService) {}

  inactiveUsers: string[] = [];
  activeUsers: string[] = [];

  ngOnInit() {
    this.inactiveUsers = this.userService.inactiveUsers;
    this.activeUsers = this.userService.activeUsers;
  }
}
