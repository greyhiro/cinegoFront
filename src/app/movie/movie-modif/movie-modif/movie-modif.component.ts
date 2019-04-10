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
    nomOriginalFilm:string;
    description: string;
    affichefilm: string;
    dateRealisation: string;
    video:string;
   
    Class:string;
    Response:string;
  
  

  constructor(private movieService : MovieService, private formBuilder: FormBuilder,  private router: Router, private activatedRoute: ActivatedRoute) {

   }

 
   ngOnInit() {
    console.log('ngOnInit');
    
     this.registerFilm = this.formBuilder.group({
      nomFilm: ['', [Validators.required, Validators.minLength(2)]],
      nomFilmOriginal: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(2)]],
      afficheFilm: ['', [Validators.required, Validators.minLength(6)]],
      dateRealisation: ['', Validators.required],
      video : ['', [Validators.required, Validators.minLength(2)]]  }); 

      this.Class= "alert alert-secondary";
      this.Response = " ";
     

  this.idFilm = this.activatedRoute.snapshot.paramMap.get('id');
  this.idFilmNumber = Number (this.idFilm);

  this.movieService.FindFilmById(this.idFilmNumber).subscribe(movierecup =>{ console.log("id du film: " +this.idFilmNumber); 
  this.movie= movierecup;  
  this.nomFilm = this.movie.nomFilm.toString();
  this.nomOriginalFilm= this.movie.nomFilmOriginal.toString();
  this.description = this.movie.description.toString();
  this.affichefilm = this.movie.afficheFilm.toString();
  this.dateRealisation = this.movie.dateRealisation.toString();
  this.video = this.movie.video.toString();
 
  console.log("film recup !");
} , err=>{ console.log("pas recup le film pour cet ID "+ this.idFilmNumber);
});

    
}


get f() { return this.registerFilm.controls; }

onSubmit() {


  this.submitted=true;
  console.log(this.registerFilm.value);
  this.movieService.modifierFilm(this.registerFilm.value, this.idFilmNumber).subscribe(movie => {console.log("film bien modifié en base");
  this.Class="alert alert-success";
  this.Response = "Film modifié avec succès";
}, err =>{ console.log("dead request" + this.idFilmNumber);
this.Class="alert alert-danger";
this.Response = "Film non modifié";
});
  }
}