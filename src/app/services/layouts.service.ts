import { Injectable } from '@angular/core';
import { DEFAULT_LAYOUT, NAVIGATION_LAYOUTS } from '../mock-layouts';
import { Link, NavigationLayout, NavigationNode } from '../models/navigation-layout';
import { Role } from '../models/role';
import { LINKS} from '../mock-links';

/**
 * Service for getting the Navigation layouts
 */
@Injectable({
  providedIn: 'root'
})
export class LayoutsService {

  private defaultLayout!: NavigationLayout;
  private layouts: NavigationLayout[] = [];
  private links: Link[] = [];

  constructor() { 
    this.links = LINKS;
    this.layouts = NAVIGATION_LAYOUTS;
    this.defaultLayout = DEFAULT_LAYOUT;
    this.populateLayouts();
  }

  /**
   * Gets the Navigation Sidebar Layout associated with the Role
   * @param role The Role
   * @returns The associated Navigation Layout
   */
  getNavigationLayout(role: Role): NavigationLayout {
    const layout = this.layouts.find(l => l.id === role.id);
    return layout ?? this.defaultLayout;
  }

  /**
   * Hydrate the Mock Layout objects with Link objects
   * This is only here to support the MOCK data
   */
  private populateLayouts(): void {
    // For each layout
    this.layouts.forEach((l: NavigationLayout) => {

      // Iterate through the top level nodes
      l.nodes.forEach( (nn: NavigationNode) => {

        // If it has a link id, it is a top level link (e.g. Dashboard)
        if (nn.linkId !== null) {
          nn.link = this.links.find((l: Link) => l.id === nn.linkId) || null;
        }

        // If it has child nodes, it is a Header, so populate the child node Links
        nn.nodes.forEach((nnn: NavigationNode) => {          
          if (nnn.linkId !== null) {
            nnn.link = this.links.find((l: Link) => l.id === nnn.linkId) || null;
          }
        });
      });
    });
  }
}
