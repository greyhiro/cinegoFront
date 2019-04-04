import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movie/movies-list/movies-list.component';
import { AppComponent } from './app.component'
import { AcceuilComponent }  from './Acceuil/acceuil/acceuil.component'
import { CommonModule } from '@angular/common';
import { MovieCreateComponent } from './movie/movie-create/movie-create.component'
import { MovieModifComponent } from './movie/movie-modif/movie-modif/movie-modif.component'




const routes: Routes = [
    {path:"Film", component: MoviesListComponent},
    {path:"Acceuil", component: AcceuilComponent},
    {path:"", component:AcceuilComponent},
    {path:"Film/Create", component:MovieCreateComponent},
    {path:"Film/Modif/:id", component:MovieModifComponent }

   
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        CommonModule
       
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
