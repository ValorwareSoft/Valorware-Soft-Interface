import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  constructor(
    private router: Router
  ) { }
  navigate(link: string) {
    switch (link) {
      case 'contact-us':
        this.router.navigate(['/contact-us']);
        break;
    }
  }
}
