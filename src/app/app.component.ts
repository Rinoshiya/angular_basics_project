import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './header/header.component';
// import { UserComponent } from './user/user.component';
// import { TasksComponent } from './tasks/tasks.component';

import { DUMMY_USERS } from './dummy-users';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  // standalone: false,
  // if standalone is false cant use imports here.use in app module.
  // imports: [RouterOutlet, HeaderComponent,UserComponent,TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId!: string;
  get selected() {
    // ! - if the id is not matched undefined is returned. gets error in html. just conviencing ts
    return this.users.find((user) => user.id === this.selectedUserId); 
  }
  
  onSelectedUser(id: string) {
    this.selectedUserId = id;
  }
}
