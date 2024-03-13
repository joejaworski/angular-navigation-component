import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Link, NavigationNode } from '../../models/navigation-layout';

@Component({
  selector: 'app-sidebar-link',
  templateUrl: './sidebar-link.component.html',
  styleUrls: ['./sidebar-link.component.scss']
})
export class SidebarLinkComponent {

  @Input() navigationNode!: NavigationNode;
  @Output() onNavigate = new EventEmitter<Link>();

  constructor() {}

  /**
   * Handles a click on a Link
   * @param link 
   */
  navigate(link: Link | null): void {
    if (link !== null) {
      this.onNavigate.emit(link);
    }
  }

}
