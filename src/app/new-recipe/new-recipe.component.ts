import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models.recipe.model';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent {
  @Output sendRecipe = new EventEmitter();

  submitForm(name: string, description: string, ingredients: string[], difficulty: number){
    let newRecipe: Recipe = new Recipe(name, description, ingredients, parseInt(difficulty));
    this.sendRecipe.emit(newRecipe);
  }
  constructor() { }

  ngOnInit() {
  }

}
