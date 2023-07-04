import { Component, Input } from '@angular/core';
import { User } from './Users/shared/user.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'users-project-with-material';
  usersList: User[] = [new User('Simon', 29), new User('Tina', 31)];

  onUserCreated(user: User) {
    console.log(`Coming from app: ${user.name} is ${user.age} years old.`);
    this.usersList.push(new User(user.name, user.age));
    console.log(this.usersList);
  }
}
