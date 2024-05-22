import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [CommonModule, MatTooltipModule],
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {
  readonly CLOSE: string = 'Close';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router,
    public dialogRef: MatDialogRef<PopUpComponent>) {
  }
  onClose(): void {
    this.dialogRef.close();
  }
  navigateToAboutUs(): void {
    this.onClose();
    this.router.navigate(['/about-us']);
  }
}
