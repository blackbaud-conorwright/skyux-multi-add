import {
  Component
} from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public teamMembers: string[] = [];

  public isValid(value: string) {
    // Mwahahahahahahahahahaha!
    const invalidNames = ['steve', 'trevor', 'alex'];
    return value && invalidNames.filter((name: string) => value.toLowerCase() === name).length === 0;
  }
}
