import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../shared/user.module';
import { Input } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent {
  // usersList: User[] = [new User('Simon', 29), new User('Tina', 31)];

  @Input() usersList: User[] = [];
  @Input('newUser') addedUser: User;

  @Output('deletedUserOutput') deletedUser = new EventEmitter<User>();

  onClick(user) {
    console.log('clicked');
    console.log(user.id);

    this.deletedUser.emit(user.id);
  }
}
