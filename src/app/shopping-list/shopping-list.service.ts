import { Subject } from "rxjs";
import { Ingredients } from "../shared/ingredients.component";

export class ShoppingService{
    ingEditing = new Subject<number>();
    private ingredients:Ingredients[] =[];

    getIngredients(){
        return this.ingredients;
    }

    getIngerdientToEdit(index:number){
        return this.ingredients[index]
    }

    addIngredients(ingredient:Ingredients){
        this.ingredients.push(ingredient);
    }

    onUpdateIngredient(index:number , newIngredient:Ingredients){
        this.ingredients[index] = newIngredient;
    }


    addIngredientsFromRecipe(ingredient:Ingredients[]){
        this.ingredients.push(...ingredient)
    }

    onDeleteIngredients(index:number) {
        this.ingredients.splice(index,1)
    }

}
