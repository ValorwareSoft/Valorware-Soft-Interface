import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { NgxIntlTelInputModule, SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [CommonModule, MatTooltipModule,NgxIntlTelInputModule, RouterModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {
  readonly CLOSE: string = 'Close';

  onClose(): void {
    this.dialogRef.close();
  }
  navigateToAboutUs(): void {
    this.onClose();
    this.router.navigate(['/about-us']);
  }



  customCodeForm: FormGroup;
  placeholder: string = 'Enter Phone Number';

  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.India, CountryISO.UnitedKingdom];

  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, private router: Router,
    public dialogRef: MatDialogRef<PopUpComponent>) {
    this.customCodeForm = this.formBuilder.group({
      firstName: [
        '',
        [
          Validators.required,
          this.minLengthWithSpacesValidator(2),
          Validators.maxLength(30),
          Validators.pattern('^[a-zA-Z ]+$'),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          this.minLengthWithSpacesValidator(2),
          Validators.maxLength(30),
          Validators.pattern('^[a-zA-Z ]+$'),
        ],
      ],
      emailAddress: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$'
          ),
        ],
      ],
      phoneNumber: [
        '',
        [Validators.required],
      ],
      message: [
        '',
      ],
    });
  }

  phoneNumberValidator() {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (value && typeof value === 'object' && value.hasOwnProperty('number')) {
        const isValid = value.isValid;
        return isValid ? null : { invalidPhoneNumber: true };
      }
      return { invalidPhoneNumber: true };
    };
  }


  minLengthWithSpacesValidator(minLength: number) {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value: string = control.value || '';
      const spaceCount: number = (value.match(/\s/g) || []).length;
      const actualLength: number = value.length - spaceCount;
      return actualLength < minLength ? { minlength: true } : null;
    };
  }

  onSubmit(): void {
    
  }

}
