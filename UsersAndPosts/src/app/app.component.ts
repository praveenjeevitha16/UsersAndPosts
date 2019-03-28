import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public tabs: any[] = [
    { title: 'Users', content: '', route: '/users', active: false },
    { title: 'Posts', content: '', route: '/posts', active: false }
  ];

  constructor(private router: Router) {
    if(document.location.pathname === '/posts') {
      this.tabs[1].active = true;
      this.tabs[0].active = false;
    } else {
      this.tabs[1].active = false;
      this.tabs[0].active = true;
    }
  }
  

  selectedTab(tab) {
  	tab.active = true;
    this.router.navigateByUrl(tab.route);
  }
}
