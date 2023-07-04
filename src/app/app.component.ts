import { Component } from '@angular/core';
import { User } from './Users/shared/user.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'users-project-with-material';

  usersList: User[] = [new User(1, 'Simon', 29), new User(2, 'Tina', 31)];

  // updatedUsersList = [];

  onUserCreated(user: User) {
    console.log(`Coming from app: ${user.name} is ${user.age} years old.`);

    //! Pushing the new user to the users list
    this.usersList.push(new User(user.id, user.name, user.age));
    console.log(this.usersList);

    // this.usersList.push((prevData: User[]) => {
    //   return [new User(user.id, user.name, user.age), ...prevData];
    // });
  }

  onUserDelete(id: number) {
    console.log('Deleted users id ' + id);
    this.usersList = this.usersList.filter((user) => user.id !== id);
    return this.usersList;
  }
}
