import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movie/movies-list/movies-list.component';
import { AppComponent } from './app.component'
import { AcceuilComponent }  from './Acceuil/acceuil/acceuil.component'
import { CommonModule } from '@angular/common';
import { MovieCreateComponent } from './movie/movie-create/movie-create.component'
import { MovieModifComponent } from './movie/movie-modif/movie-modif/movie-modif.component'
import { SceanceCreateComponent } from './Sceance/sceance-create/sceance-create.component'
import { SceanceListComponent } from './Sceance/sceance-list/sceance-list.component'
import { CommandeListComponent } from './Commande/commande-list/commande-list.component';
import { SalleReservePlaceComponent } from './salle/salle-reserve-place/salle-reserve-place.component';




const routes: Routes = [
    {path:"Film", component: MoviesListComponent},
    {path:"Acceuil", component: AcceuilComponent},
    {path:"", component:AcceuilComponent},
    {path:"Film/Create", component:MovieCreateComponent},
    {path:"Film/Modif/:id", component:MovieModifComponent },
    {path:"Sceance/Create/:id", component:SceanceCreateComponent},
    {path:"Sceance/list/:id",component: SceanceListComponent},
    {path:"Commande",component: CommandeListComponent},
    {path:"Salle/Reserve/:idSalle/:idSceance",component: SalleReservePlaceComponent},

   
];
 
@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        CommonModule
       
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
