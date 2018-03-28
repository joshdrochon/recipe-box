export class Recipe {

  rating: number = 0;
  used: boolean = false;
  static allRecipes: Recipe[] = [];
  constructor(public name: string, public description: string, public ingredients: string[], public difficulty: number){}

  static getTopRecipe(){
    let topRated: number = Recipe.allRecipes[0].rating;
    for(let i = 0; i<Recipe.allRecipes.length; i++){
      if(Recipe.allRecipes[i].rating > topRated){
        topRated = Recipe.allRecipes[i].rating;
      }
    }
    return topRated;
  }

  avgDifficulty(){
    let l: number = Recipe.allRecipes.length;
    let total: number = 0;
    for(let i=0;i<l; i++){
      total += Recipe.allRecipes[i].difficulty;
      return Math.round(total/l);
    }
  }
}
