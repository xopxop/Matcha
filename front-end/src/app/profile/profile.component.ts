import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatChipInputEvent } from "@angular/material/chips";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor() {
  }

  userProfileForm: FormGroup = new FormGroup({
    gender: new FormControl(),
    sexualOrientation: new FormControl(),
    biography: new FormControl(),
    listOfInterest: new FormControl(),
    picture: new FormControl()
  });

  onSubmit(): void {
    console.log(this.userProfileForm);
  }


  firstFormGroup: FormGroup = new FormGroup({
    gender: new FormControl()
  });

  secondFormGroup: FormGroup = new FormGroup({
    sexualOrientation: new FormControl()
  });

  thirdFormGroup: FormGroup = new FormGroup({
    biography: new FormControl()
  });

  forthFormGroup: FormGroup = new FormGroup({
    interest: new FormControl()
  });

  interests = [
    { name: 'cat' }, { name: 'dog' }, { name: 'fish' }
  ];

  onRemove(item: any): void {
    const index = this.interests.indexOf(item);

    if (index >= 0) {
      this.interests.splice(index, 1);
    }
  }

  onAdd(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.interests.push({name: value});
    }

    event.chipInput!.clear();
  }
}