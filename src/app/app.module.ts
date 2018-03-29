import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';

//angulars spin on extending a class (class-decorators)
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeListComponent,
    EditRecipeComponent,
    NewRecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
