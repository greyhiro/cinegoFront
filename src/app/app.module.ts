


import { AppComponent } from './app.component';
import { MoviesListComponent } from './movie/movies-list/movies-list.component';
import { MenuBarComponent } from './Principal/menu-bar/menu-bar.component';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { AcceuilComponent } from './Acceuil/acceuil/acceuil.component';
import { MovieCreateComponent } from './movie/movie-create/movie-create.component';
import {DatePickerComponent} from './DatePicker/datepicker/datepicker.component';
import { MovieModifComponent } from './movie/movie-modif/movie-modif/movie-modif.component';
import { SceanceCreateComponent } from './Sceance/sceance-create/sceance-create.component';
import { SceanceListComponent } from './Sceance/sceance-list/sceance-list.component';
import { CommandeListComponent } from './Commande/commande-list/commande-list.component';



const appRoutes: Routes = [
  { path: 'Film', component: MoviesListComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MenuBarComponent,
    AcceuilComponent,
    MovieCreateComponent,
    DatePickerComponent,
    MovieModifComponent,
    SceanceCreateComponent,
    SceanceListComponent,
    CommandeListComponent
   
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
