import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, Subject  } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Salle } from './../models/salle'
import { Injectable } from '@angular/core';


const API_BASE_URL: string = environment.apiBaseUrl;


@Injectable({
  providedIn: 'root'
})

export class SalleService{

  private SalleSUb: Subject<Salle> = new Subject();

  get SalleObs(): Observable<Salle> {
    return this.SalleSUb.asObservable();
  }

  constructor(private http:HttpClient) { }
 
  
  findAll(): Observable<Salle[]>{
    //api request sur la notre backend
    //http get() => retourne un Observable
   

    return this.http.get<Salle[]>(`${API_BASE_URL}Salles`);

  }

  findSalleById(idSalle:number): Observable<Salle>{

    return this.http.get<Salle>(`${API_BASE_URL}Salles/${idSalle}`);

  }

 




}