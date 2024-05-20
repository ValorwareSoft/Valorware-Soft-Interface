import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(
    private router: Router
  ) { }
  navigate(link: string) {
    switch (link) {
      case 'home':
        this.router.navigate(['/home']);
        break;
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
