import { Component } from "@angular/core";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor() {
  }

}

const questionList = [
  {
    id: 1,
    questionText: 'What is your estimated skill level',
    options: [
      'Beginer',
      'Experienced',
      'Advanced'
    ]
  },
  {
    id: 2,
    questionText: 'Sth2',
    options: [
      'a',
      'b',
      'c'
    ]
  },
  {
    id: 3,
    questionText: 'Sth3',
    options: [
      'a',
      'b',
      'c'
    ]
  },
  {
    id: 4,
    questionText: 'Sth4',
    options: [
      'a',
      'b',
      'c'
    ]
  }
]