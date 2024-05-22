import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-find-jobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './find-jobs.component.html',
  styleUrls: ['./find-jobs.component.scss']
})
export class FindJobsComponent {
  haveJobs : boolean = false;
}
