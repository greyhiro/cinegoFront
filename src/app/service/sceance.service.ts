import { Injectable } from '@angular/core';
import { Sceances } from '../models/sceance';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, Subject  } from 'rxjs';
import { environment } from 'src/environments/environment';


const API_BASE_URL: string = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class SceanceService {

  private SceanceSUb: Subject<Sceances> = new Subject();

  get filmObs(): Observable<Sceances> {
    return this.SceanceSUb.asObservable();

  }

  constructor(private http:HttpClient) { }

  getAllSceances(): Observable<Sceances[]>{
   

    return this.http.get<Sceances[]>(`${API_BASE_URL}Sceance`);

  }

  getSceancesById(id:number): Observable<Sceances[]>{
   

    return this.http.get<Sceances[]>(`${API_BASE_URL}Sceance/Reserver/${id}`);

  }

  getSceancesByFilmId(id:number): Observable<Sceances[]>{
   

    return this.http.get<Sceances[]>(`${API_BASE_URL}Sceance/${id}`);

  }

  createSceanceByFilm(sceance:Sceances): Observable<Sceances>{

    console.log(JSON.stringify(sceance));
    
    return this.http.post<Sceances>(`${API_BASE_URL}Sceance/Create/`, sceance);

  }

}


