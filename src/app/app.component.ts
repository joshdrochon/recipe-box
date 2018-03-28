import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';
//no need to import HomeComponent. Functionality supplied by app.module.ts

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rootList: Recipe[] = [
    new Recipe('PB&J', 'Eat!', ['Peanutbutter', 'jelly', 'bread'], 2),
    new Recipe('Spaghetti', 'Take me to Italy', ['sauce', 'meatballs', 'pasta'], 3),
    new Recipe('Pizza', 'Bake with love', ['dough', 'sauce', 'cheese'], 1)
  ];

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
}
