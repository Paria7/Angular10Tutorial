import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = 'angular 10 tutorial';
  appDescription = 'Was this post helpful for you about the angular?';
  backgroundImgUrl = 'assets/imgs/test.png';

  getName(): string {
    return 'razr';
  }

  fruits = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Orange' },
    { id: 3, name: 'Strawberry' }
  ]

  isDisabled: boolean = true;
}
