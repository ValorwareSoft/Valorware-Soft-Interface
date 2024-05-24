import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterModule } from '@angular/router';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  FormsModule,
} from '@angular/forms';
import {
  NgxIntlTelInputModule,
  SearchCountryField,
  CountryISO,
  PhoneNumberFormat,
} from 'ngx-intl-tel-input';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [
    CommonModule,
    MatTooltipModule,
    NgxIntlTelInputModule,
    RouterModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule
  ],
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
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

  fileUploaded: boolean = false;
  readonly REMOVE_FILE: string = 'Remove File';

  resume(event: any) {
    this.fileUploaded = false;
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      console.log(selectedFile);
      const fileType = selectedFile.type;
      const fileSize = selectedFile.size;
      this.fileUploaded = true;
      if (fileType !== 'application/pdf') {
        this.customCodeForm.get('resume')?.setErrors({ invalidFile: true });
      } else if (fileSize > 3145728) {
        this.customCodeForm
          .get('resume')
          ?.setErrors({ invalidFileTypeOrSize: true });
      } else {
        const reader = new FileReader();

        reader.onload = () => {
          const fileContent = reader.result as string;

          this.customCodeForm.patchValue({
            resume: {
              name: selectedFile.name,
              type: selectedFile.type,
              size: selectedFile.size,
              content: fileContent,
            },
          });
        };
        reader.readAsDataURL(selectedFile);
      }
    }
  }

  removeFile() {
    this.customCodeForm.get('resume')?.setValue('');
    this.fileUploaded = false;
  }

  customCodeForm: FormGroup;
  placeholder: string = 'Enter Phone Number';

  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [
    CountryISO.India,
    CountryISO.UnitedKingdom,
  ];

  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    public dialogRef: MatDialogRef<PopUpComponent>
  ) {
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
      phoneNumber: ['', [Validators.required]],
      contractType: [''],
      workArrangement: [''],
      message: [''],
      resume: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    if (this.data.title === 'submit-resume') {
      this.customCodeForm.get('contractType')?.setValidators([Validators.required]);
      this.customCodeForm.get('workArrangement')?.setValidators([Validators.required]);
    } else {
      this.customCodeForm.get('contractType')?.clearValidators();
      this.customCodeForm.get('workArrangement')?.clearValidators();
    }

    this.customCodeForm.get('contractType')?.updateValueAndValidity();
    this.customCodeForm.get('workArrangement')?.updateValueAndValidity();
  }

  phoneNumberValidator() {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (
        value &&
        typeof value === 'object' &&
        value.hasOwnProperty('number')
      ) {
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
    if (this.customCodeForm.valid) {
      console.log(this.customCodeForm.value);
      this.toastr.success('Form submitted successfully!');
    } else {
      this.toastr.error('Please fill out the form correctly.');
    }
  }


  ////

  url = 'https://example.com/hdshjdhgdhjdshjd'; // Your URL

  copyLink() {
    const urlField = document.getElementById('urlField') as HTMLInputElement;
    urlField.select();
    document.execCommand('copy');
    this.toastr.success('Link copied to clipboard');
  }

  shareOnWhatsApp() {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(this.url)}`;
    window.open(whatsappUrl, '_blank');
  }

  shareOnInstagram() {
    // Instagram sharing typically involves creating a story or post manually
    alert(
      'Instagram does not support direct URL sharing via web. Please copy the link and share manually.'
    );
  }

  shareOnFacebook() {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      this.url
    )}`;
    window.open(facebookUrl, '_blank');
  }
}
