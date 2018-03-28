import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  /*in our <app-recipe-list> tags in app.component.html we include
  attributes. In brackets we include the name of the input, which
  is childRecipeList, and set it equal to rootlist. Then essentially
  when we referece childRecipeList it will contain the same data as
  the master list.*/
  @Input() childRecipeList: Recipe[];
  @Output() clickSender = new EventEmitter();

  /*Remember, [square brackets] represent input, which is information
  flowing from the parent component into the child component. (Parentheses)
  represent output, or actions that are moving out of the child
  component up to the parent component.*/

  editButtonClicked(recipeToEdit: Recipe){
    this.clickSender.emit(recipeToEdit);
  }


  difficultyColor(recipe){
    if(recipe.difficulty == 3){
      return "bg-danger";
    }else if(recipe.difficulty == 2){
      return "bg-warning";
    }else{
      return "bg-info";
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
