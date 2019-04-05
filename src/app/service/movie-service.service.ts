import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, Subject  } from 'rxjs';
import { Movie } from '../models/movie';
import { environment } from 'src/environments/environment';
import { JsonPipe } from '@angular/common';
import { moveEmbeddedView } from '@angular/core/src/view';


const API_BASE_URL: string = environment.apiBaseUrl;


@Injectable({
  providedIn: 'root'
})
export class MovieService {
 
  private filmSUb: Subject<Movie> = new Subject();

  get filmObs(): Observable<Movie> {
    return this.filmSUb.asObservable();
  }

  constructor(private http:HttpClient) { }
 
  
  findAll(): Observable<Movie[]>{
    //api request sur la notre backend
    //http get() => retourne un Observable
   

    return this.http.get<Movie[]>(`${API_BASE_URL}Film`);

  }
  sauvegarderFilm(movie: Movie): Observable<Movie> {

   
   
    return this.http.post<Movie>(`${API_BASE_URL}Film/Create`,  movie)
      
  }

  modifierFilm(movie:Movie, id: number) : Observable<Movie> {
    console.log(movie);

    return this.http.put<Movie>(`${API_BASE_URL}Film/Modif/${id}`, movie)
       
  }

  FindFilmById(id:number) :Observable<Movie>{

    return this.http.get<Movie>(`${API_BASE_URL}Film/${id}`);
                       
  }


  deleteFilmById(id:number) :Observable<Movie>{

    return this.http.post<Movie>(`${API_BASE_URL}Film/Delete/${id} `, null)

  }
 
 
}
