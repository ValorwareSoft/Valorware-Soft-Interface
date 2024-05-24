import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-find-jobs',
  standalone: true,
  imports: [CommonModule, RouterModule, MatDialogModule],
  templateUrl: './find-jobs.component.html',
  styleUrls: ['./find-jobs.component.scss']
})
export class FindJobsComponent {
  constructor(public dialog: MatDialog, private router: Router) { }
  haveJobs: boolean = true;
  cardsData = [
    {
      number: "VWS2K24001",
      title: "Software Engineer",
      contractType: "Full-time",
      workArrangement: "Remote",
      numberOfPositions: 3,
      postedOn: "2024-05-01",
      numberOfApplicants: 12
    },
    {
      number: "VWS2K24002",
      title: "Data Analyst",
      contractType: "Part-time",
      workArrangement: "On-site",
      numberOfPositions: 2,
      postedOn: "2024-05-02",
      numberOfApplicants: 8
    },
    {
      number: "VWS2K24003",
      title: "Project Manager",
      contractType: "Contract",
      workArrangement: "Hybrid",
      numberOfPositions: 1,
      postedOn: "2024-05-03",
      numberOfApplicants: 5
    },
    {
      number: "VWS2K24004",
      title: "UX Designer",
      contractType: "Full-time",
      workArrangement: "Remote",
      numberOfPositions: 2,
      postedOn: "2024-05-04",
      numberOfApplicants: 7
    },
    {
      number: "VWS2K24005",
      title: "Marketing Specialist",
      contractType: "Part-time",
      workArrangement: "On-site",
      numberOfPositions: 4,
      postedOn: "2024-05-05",
      numberOfApplicants: 10
    },
    {
      number: "VWS2K24006",
      title: "HR Coordinator",
      contractType: "Full-time",
      workArrangement: "Hybrid",
      numberOfPositions: 1,
      postedOn: "2024-05-06",
      numberOfApplicants: 3
    },
    {
      number: "VWS2K24007",
      title: "Backend Developer",
      contractType: "Contract",
      workArrangement: "Remote",
      numberOfPositions: 2,
      postedOn: "2024-05-07",
      numberOfApplicants: 14
    },
    {
      number: "VWS2K24008",
      title: "QA Engineer",
      contractType: "Full-time",
      workArrangement: "On-site",
      numberOfPositions: 3,
      postedOn: "2024-05-08",
      numberOfApplicants: 9
    },
    {
      number: "VWS2K24009",
      title: "Technical Writer",
      contractType: "Part-time",
      workArrangement: "Hybrid",
      numberOfPositions: 1,
      postedOn: "2024-05-09",
      numberOfApplicants: 4
    },
    {
      number: "VWS2K24010",
      title: "DevOps Engineer",
      contractType: "Full-time",
      workArrangement: "Remote",
      numberOfPositions: 2,
      postedOn: "2024-05-10",
      numberOfApplicants: 11
    }
  ];

  onSubmit(): void {
    this.openDialog('submit-resume');
  }

  openDialog(title: string): void {
    this.dialog.open(PopUpComponent, {
      data: {
        title: title,
      },
      disableClose: true,
      hasBackdrop: true
    });
  }

  applyNow(cardNumber: string) {
    this.router.navigate(['/apply', cardNumber]);
  }

}
