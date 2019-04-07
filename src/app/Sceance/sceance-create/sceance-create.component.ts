import { Component, OnInit } from '@angular/core';
import {DatePickerComponent} from './../../DatePicker/datepicker/datepicker.component';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {Sceances} from '../../models/sceance';
import { SceanceService} from '../../service/sceance.service';
import {MovieService} from './../../service/movie-service.service';
import { Movie } from '../../models/movie';
import { Router, ActivatedRoute } from '@angular/router';
import { SalleService } from 'src/app/service/salle.service';
import { Salle } from 'src/app/models/salle';

@Component({
  selector: 'app-sceance-create',
  templateUrl: './sceance-create.component.html',
  styleUrls: ['./sceance-create.component.css']
})
export class SceanceCreateComponent implements OnInit {
  sceance: Sceances;
  model: NgbDateStruct;
  movie: Movie;
  idnumber: number;
  Class: string;
  Response: string;
  idFilm: string;
  idFilmNumber: number;
  date: {year: number, month: number, day:number};
  time: {hour: number, minute: number};
  salleModel:{idSalle: number};
  salleRecup: Salle;
  dateEtHeureSceance:string;
  salles: Salle [];
  salle:Salle;
  choixSalle : string;
  nomFilm :string;
 
  

  constructor(private salleService:SalleService ,private calendar: NgbCalendar, private sceanceService:SceanceService, private movieService: MovieService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  selectToday() {
    this.model = this.calendar.getToday();
    

  }


  onClickSalle(uneSalle: Salle)
  {

    
    this.salle= uneSalle;
    this.choixSalle = "choix de la salle " + this.salle.nomSalle;


  }
  

  onSubmit(){
  
    this.model = this.calendar.getToday();
    this.dateEtHeureSceance = this.model.year +"-"+this.model.month+"-"+this.model.day+" " +this.time.hour+":"+this.time.minute.toString() ;
    console.log(this.salle);
    this.sceance = new Sceances( this.dateEtHeureSceance, this.movie,this.salle);
    this.sceance.dateEtHeureSceance = this.dateEtHeureSceance;
    
    
    this.sceance.film = this.movie;
    console.log(this.sceance.film);
    console.log(this.sceance.dateEtHeureSceance);
  
    
 
    this.sceanceService.createSceanceByFilm(this.sceance).subscribe(ok => console.log("sceance crée"), err => console.log("sceance non crée"));
  }

  ngOnInit(){

    
      this.idFilm = this.activatedRoute.snapshot.paramMap.get('id');
      this.idFilmNumber = Number (this.idFilm);
  
      this.movieService.FindFilmById(this.idFilmNumber).subscribe(movierecup =>{this.movie = movierecup;
      console.log("film recup");
      console.log(this.movie)
      },
       err=> console.log("film non recup")
       );


       this.salleService.findAll().subscribe(SallesRecup => {this.salles = SallesRecup;
       console.log("salle recupéré");
       this.nomFilm = this.movie.nomFilm;
       console.log(this.salles)}, err => console.log("pas reussi à recupérer les salles"));

      
  
  }



  
}