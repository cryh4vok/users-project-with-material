import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../shared/user.module';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  @Output('userCreated') userCreated = new EventEmitter<User>();

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
    });
  }

  ngOnInit() {}

  addUser() {
    if (this.formGroup.valid) {
      // Perform form submission logic here
      this.userCreated.emit({
        id: Math.random(),
        name: this.formGroup.value.name,
        age: this.formGroup.value.age,
      });

      console.log(this.formGroup.value.name);
      console.log(this.formGroup.value.age);
    }
  }
}
