import { RecipeResolverService } from './recipes/recipes-resolver.service';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeDetailsComponent } from "./recipes/recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { AuthComponent } from './auth/auth.component';
import { AuthGuardService } from './auth/auth-guard.service';


const appRoutes:Routes =[
    {path:'' , redirectTo:'/recipes', pathMatch:'full'},
    {path:'recipes' ,component:RecipesComponent,canActivate:[AuthGuardService],children:[
        {path:'',component:RecipeStartComponent},
        {path:'new' ,component:RecipeEditComponent},    // pay attention that the router with dynamic paramater must come after this one //
        {path:':id' , component:RecipeDetailsComponent , resolve:[RecipeResolverService]},
        {path:':id/edit' ,component:RecipeEditComponent, resolve:[RecipeResolverService]}
    ]},
    {path:'shopping-list' ,component:ShoppingListComponent},
    {path:'auth' , component:AuthComponent}
]



@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})


export class AppRoutingModule{}
