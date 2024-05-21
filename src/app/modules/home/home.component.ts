import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private router: Router
  ) { }
  navigate(link: string) {
    switch (link) {
      case 'about-us':
        this.router.navigate(['/about-us']);
        break;
      case 'services':
        this.router.navigate(['/services']);
        break;
      case 'find-jobs':
        this.router.navigate(['/find-jobs']);
        break;
      case 'contact-us':
        this.router.navigate(['/contact-us']);
        break;
    }
  }

  
 

}
