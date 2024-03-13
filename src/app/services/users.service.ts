import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { USERS } from '../mock-users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private activeUser: User;
  private users: User[] = [];

  constructor() {
    this.users = USERS;
    // For Demo, default to Admin User
    this.activeUser = USERS[0];
  }

  getUsers(): User[] {
    return this.users;
  }

  getActiveUser(): User {
    return this.activeUser;
  }

  setActiveUser(user: User): void {
    this.activeUser = user;
  }

}
