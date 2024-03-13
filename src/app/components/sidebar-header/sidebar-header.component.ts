import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Link, NavigationNode } from '../../models/navigation-layout';

@Component({
  selector: 'app-sidebar-header',
  templateUrl: './sidebar-header.component.html',
  styleUrls: ['./sidebar-header.component.scss']
})
export class SidebarHeaderComponent {

  @Input() navigationNode!: NavigationNode;
  @Output() onNavigate = new EventEmitter<Link>();

  displayChildren = true;

  constructor() {}

  /**
   * Handles a click on a link
   * @param link 
   */
  navigate(link: Link | null): void {
    if (link !== null) {
      this.onNavigate.emit(link);
    }
  }

  /**
   * Toggles the child nodes of a Header between Show / Hide
   */
  onToggleChildren(): void {
    this.displayChildren = !this.displayChildren;
  }
}
