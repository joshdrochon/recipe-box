import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';
//no need to import HomeComponent. Functionality supplied by app.module.ts

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  rootList: Recipe[] = [];

  addRecipe(newRecipe: Recipe){
    this.rootList.push(newRecipe);
  }

  selectedRecipe = null;

  /*this method only displays the form, the actual edit
  method resides in EditRecipeComponent */
  editRecipe(recipe){
    this.selectedRecipe = recipe;
  }

  finishEditing(){
    this.selectedRecipe = null;
  }

  topRecipe: Recipe = new Recipe(
    "Frozen PB&J", "Just try it!", ['peanutbutter', 'jelly', 'bread'], 1
  );


}
