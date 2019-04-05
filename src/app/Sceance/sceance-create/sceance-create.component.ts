import { Component, OnInit } from '@angular/core';
import {DatePickerComponent} from './../../DatePicker/datepicker/datepicker.component'
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {Sceance} from '../../models/sceance';
import { SceanceService} from '../../service/sceance.service';
import {MovieService} from './../../service/movie-service.service'
import {Movie} from './../../models/movie'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sceance-create',
  templateUrl: './sceance-create.component.html',
  styleUrls: ['./sceance-create.component.css']
})
export class SceanceCreateComponent implements OnInit {
  sceance: Sceance;
  model: NgbDateStruct;
  movie: Movie;
  idnumber: number;
  Class: string;
  Response: string;
  idFilm: string;
  idFilmNumber: number;
  date: {year: number, month: number, day:number};
  time: {hour: number, minute: number};

  constructor(private calendar: NgbCalendar, private sceanceService:SceanceService, private movieService: MovieService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  selectToday() {
    this.model = this.calendar.getToday();
    

  }

  onSubmit(){
    this.sceance.dateEtHeureSceance = this.model.year +"-"+this.model.month+"-"+this.model.day +"  " +this.time.hour+":"+this.time.minute ;
    this.sceanceService.createSceanceByFilm(this.sceance).subscribe(ok => console.log("sceance crée"), err => console.log("sceance non crée"));
  }

  ngOnInit(){

    this.idFilm = this.activatedRoute.snapshot.paramMap.get('id');
    this.idFilmNumber = Number (this.idFilm);
  
    this.movieService.FindFilmById(this.idFilmNumber).subscribe(movierecup =>{ console.log("id du film: " +this.idFilmNumber); 
    this.sceance.film= movierecup;  
  console.log("film recup !");
} , err=>{ console.log("pas recup le film pour cet ID "+ this.idFilmNumber);
});
  }
}