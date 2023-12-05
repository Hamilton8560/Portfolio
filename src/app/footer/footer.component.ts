import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
constructor(private router: Router){}
openLinkedIn(){
  window.open('https://www.linkedin.com/in/david-hamilton-277639217', '_blank');
}
openGithub(){
  window.open('https://github.com/Hamilton8560', '_blank');
}
}
