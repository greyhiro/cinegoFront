import { Injectable } from '@angular/core';
import { Sceance } from '../models/sceance';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, Subject  } from 'rxjs';
import { environment } from 'src/environments/environment';


const API_BASE_URL: string = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class SceanceService {

  private SceanceSUb: Subject<Sceance> = new Subject();

  get filmObs(): Observable<Sceance> {
    return this.SceanceSUb.asObservable();

  }

  constructor(private http:HttpClient) { }

  getAllSceances(): Observable<Sceance[]>{
   

    return this.http.get<Sceance[]>(`${API_BASE_URL}/Sceance`);

  }

  getSceancesByFilmId(id:number): Observable<Sceance[]>{
   

    return this.http.get<Sceance[]>(`${API_BASE_URL}/Sceance/${id}`);

  }

  createSceanceByFilm(sceance:Sceance): Observable<Sceance>{

    return this.http.post<Sceance>(`${API_BASE_URL}Sceance/Create/`, sceance);

  }

}


