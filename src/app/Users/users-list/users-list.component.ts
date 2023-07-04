import { Component } from '@angular/core';
import { User } from '../shared/user.module';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent {
  usersList: User[] = [new User('Simon', 29), new User('Tina', 31)];

  onClick(user) {
    console.log('clicked');
    console.log(user);
  }
}
