import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movie/movies-list/movies-list.component';
import { AppComponent } from './app.component'
import { AcceuilComponent }  from './Acceuil/acceuil/acceuil.component'
import { CommonModule } from '@angular/common';
import { MovieCreateComponent } from './movie/movie-create/movie-create.component'



const routes: Routes = [
    {path:"Film", component: MoviesListComponent},
    {path:"Acceuil", component: AcceuilComponent},
    {path:"*", component:AcceuilComponent},
    {path:"Film/Create", component:MovieCreateComponent}
   
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        CommonModule
       
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
