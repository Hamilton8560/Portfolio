import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router){}

  scrollTo(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  backToHome(){
    this.router.navigate([''])
  }
  goToAboutMe(){
    this.router.navigate(['about-me'])
  }
  isRootRoute() {
    return this.router.url === '/';
  }
}
