import { Component, OnInit, Pipe } from '@angular/core';
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
  choixDate: string;
  Mois: string;
  MoisString : string;
  heureChoisie: string;
  day: string;
  month: string;
  hour: string;
  minute: string;
 

  constructor(private salleService:SalleService ,private calendar: NgbCalendar, private sceanceService:SceanceService, private movieService: MovieService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  
    
changeDate(){
  
  
  this.MoisString = this.model.month.toString();

  console.log(this.model.month);
  if(this.MoisString=="1"){
    this.Mois = "janvier"
  }
  if(this.MoisString=="2"){
    this.Mois = "février"
  }
  if(this.MoisString=="3"){
    this.Mois = "mars"
  }
  if(this.MoisString=="4"){
    this.Mois = "avril"
  }
  if(this.MoisString=="5"){
    this.Mois = "mai"
  }
  if(this.MoisString=="6"){
    this.Mois = "juin"
  }
  if(this.MoisString=="7"){
    this.Mois = "juiller"
  }
  if(this.MoisString=="8"){
    this.Mois = "aout"
  }
  if(this.MoisString=="9"){
    this.Mois = "septembre"
  }
  if(this.MoisString=="10"){
    this.Mois = "octobre"
  }
  if(this.MoisString=="11"){
    this.Mois = "nomvembre"
  }
  if(this.MoisString=="12"){
    this.Mois = "décembre"
  }

  this.choixDate = "vous avez choisie comme date: " + this.model.day + " " + this.Mois + " " +this.model.year;
}

    
changeHeure(){

  this.heureChoisie = "Vous avez choisie l'heure: " + this.time.hour +" h " + this.time.minute;

}
  



  onClickSalle(uneSalle: Salle)
  {

    
    this.salle= uneSalle;
    this.choixSalle = "choix de la salle " + this.salle.nomSalle;


  }
  

  onSubmit(){
  
    if(this.model.day.toString().length==1)
    {
      this.day = "0"+this.model.day;
    }else
    this.day = ""+this.model.day;

    if(this.model.month.toString().length==1)
    {
      this.month = "0"+this.model.month;
    }else this.month=""+this.model.month;

    if(this.time.hour.toString().length==1)
    {
      this.hour = "0"+this.time.hour;
    }else
    this.hour = ""+this.time.hour;
    if(this.time.minute.toString().length==1)
    {
      this.minute = "0"+this.time.minute;
    }else  this.minute = ""+this.time.minute;







    this.dateEtHeureSceance = this.model.year +"-"+this.month+"-"+this.day+"T"+this.hour+":"+this.minute ;
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