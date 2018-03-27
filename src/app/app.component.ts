import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editRecipe(){
    alert('Time to edit this recipe!');
  }
  recipes: Recipe[] = [
    new Recipe('PB&J', 'Yum!', ['Peanutbutter', 'jelly', 'bread']),
    new Recipe('Chocolate Chip Cookies', 'Bake at 350 degrees', ['flour', 'eggs', 'chocolate chips', 'butter', 'salt']),
    new Recipe('Cheese Pizza', 'Bake with love', ['dough', 'sauce', 'cheese'])
  ];
}
