import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-prueba';
  public page: string;
  constructor(public router: Router, location: Location) {
    this.page = router.url;
    console.log(this.page);
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.page = location.path();
      } else {
        this.page = 'CRUD'
      }
    });
  }
}
