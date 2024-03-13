import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.scss']
})
export class FakeComponent {

  route: string;
  
  private sub = this.router.events.pipe(
    filter(event => event instanceof NavigationStart),
    map(event => event as NavigationStart)
  )
  .subscribe(event => this.route = event.url);

  constructor(private router: Router) {
    this.route = router.url;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
