import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  openExternalUrl(){
    window.open('https://www.femexercise.pro', '_blank');
  }

  openExternalUrlForGithub(){
    window.open('https://github.com/Hamilton8560/LearnMath', '_blank');
  }
}
