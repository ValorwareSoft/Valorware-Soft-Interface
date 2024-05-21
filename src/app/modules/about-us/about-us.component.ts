import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
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
