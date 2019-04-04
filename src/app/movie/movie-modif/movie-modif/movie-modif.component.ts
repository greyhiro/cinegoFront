import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../../service/movie-service.service'
import { Movie } from 'src/app/models/movie';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
 
  selector: 'app-movie-modif',
  templateUrl: './movie-modif.component.html',
  styleUrls: ['./movie-modif.component.css']
})
export class MovieModifComponent implements OnInit {
  movie: Movie;
  registerFilm: FormGroup;
    submitted = false;
    idFilm:string;
    http :HttpClient
    idFilmNumber: number;
    patate: string;
    nomFilm: string;
   


  constructor(private movieService : MovieService, private formBuilder: FormBuilder,  private router: Router, private activatedRoute: ActivatedRoute) {

   }

 
   ngOnInit() {
    console.log('ngOnInit');
    
     /* this.registerFilm = this.formBuilder.group({
      nomFilm: ['', [Validators.required, Validators.minLength(2)]],
      nomFilmOriginal: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(2)]],
      afficheFilm: ['', [Validators.required, Validators.minLength(6)]],
      dateRealisation: ['', Validators.required],
      video : ['', [Validators.required, Validators.minLength(2)]]  }); */

     

    this.idFilm = this.activatedRoute.snapshot.paramMap.get('id');
    this.idFilmNumber  =Number (this.idFilm);

  this.movieService.FindFilmById(this.idFilmNumber).subscribe(movierecup =>{ console.log("id du film: " +this.idFilmNumber); 
  this.movie= movierecup;  
  
  this.nomFilm = this.movie.nomFilm.toString();
  debugger;
  console.log("film recup !");
} , err=> console.log("pas recup le film pour cet ID "+ this.idFilmNumber));
  

   

  
    

    
}




onSubmit() {


  this.submitted=true;
  console.log(this.registerFilm.value);
  
  this.movieService.modifierFilm(this.registerFilm.value, this.idFilmNumber).subscribe(movie => "film bien modifié en base", err => "dead request" + this.idFilmNumber);

 
}
}