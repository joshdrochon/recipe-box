import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() topRecipe;
  header: string = 'Welcome to Simple Recipe!';
}

//use template: <h1>header</h1> to set directly without string interpolation
