import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import { User } from './models/user';
import { Link, NavigationLayout } from './models/navigation-layout';
import { LayoutsService } from './services/layouts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  private user!: User;
  
  navigationLayout! : NavigationLayout;

  navOpen: boolean = true;

  constructor(
    private userService: UsersService,
    private layoutService: LayoutsService,
    private router: Router,
  ) {
    // Initial logic to get user, then get associated layout
    this.user = this.userService.getActiveUser();
    this.updateNavigationLayout();    
  }

  /**
   * Uses the Router to Navigate to the selected Link
   * TODO: Move Navigation into a Component
   * @param link 
   */
  navigate(link: Link | null): void {
    if (link !== null) {
      this.router.navigate([link.url], { state: {link: link } });
    }
  }

  /**
   * Shows / Hides the Side Nav
   */
  toggleNav() {
    this.navOpen = !this.navOpen;
  }

  /**
   * Handles a change to the active user
   * @param user 
   */
  setActiveUser(user: User) {
    this.user = user;
    this.userService.setActiveUser(user);
    this.updateNavigationLayout();
    this.router.navigate(['']);
  }

  /**
   * When the active user changes, update the layout
   */
  private updateNavigationLayout() {
    this.navigationLayout = this.layoutService.getNavigationLayout(this.user.role);
  }

}
