import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-third-app';
  secret = false;
  log : any[] = [];

  toggleDetails() {
    this.secret = !this.secret;
    this.log.push(this.log.length * 2);
  }
}
