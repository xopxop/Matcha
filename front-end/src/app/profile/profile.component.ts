import { Component, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatStepper } from '@angular/material/stepper';
import { GenderList } from '../model/gender.enum';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @ViewChild('stepper') stepper: any;

  genderList = GenderList;

  get currentStep(): number | null {
    if (this.stepper) {
      console.log(this.stepper.selectedIndex);
      return this.stepper.selectedIndex;
    }
    return null;
  }

  constructor() {}

  userProfileForm: FormGroup = new FormGroup({
    gender: new FormControl(),
    sexualOrientation: new FormControl(),
    biography: new FormControl(),
    listOfInterest: new FormControl([
      { name: 'cat' },
      { name: 'dog' },
      { name: 'fish' }
    ]),
    picture: new FormControl([]),
  });

  onSubmit(): void {
    console.log(this.userProfileForm);
    // console.log(this.genderList);
  }

  interests = [{ name: 'cat' }, { name: 'dog' }, { name: 'fish' }];

  onRemove(item: any): void {
    const index = this.listOfInterestFormControl.value.indexOf(item);
    if (index >= 0) {
      this.listOfInterestFormControl.value.splice(index, 1);
    }
  }

  onAdd(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.listOfInterestFormControl.value.push({ name: value });
    }
    event.chipInput!.clear();
  }

  get listOfInterestFormControl(): AbstractControl {
    return this.userProfileForm.get('listOfInterest')!;
  }


  
}
