import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Output() navToggled = new EventEmitter();
  @Output() userUpdated = new EventEmitter<User>();

  user!: User;
  users: User[] = [];

  constructor(
    private userService: UsersService
  ) {}
  
  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.user = this.userService.getActiveUser();
  }

  onMenuClick() {
    this.navToggled.emit();
  }

  onUserSelected(event: any) {
    const newUser: User = event.source.value;
    if (newUser.id !== this.user.id) {
      this.userUpdated.emit(newUser);
    }
  }

}
