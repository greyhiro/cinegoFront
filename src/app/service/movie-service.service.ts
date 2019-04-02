import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { environment } from 'src/environments/environment';
import { JsonPipe } from '@angular/common';
import { moveEmbeddedView } from '@angular/core/src/view';

const API_BASE_URL: string = environment.apiBaseUrl;


@Injectable({
  providedIn: 'root'
})
export class MovieService {
 
  
  constructor(private http:HttpClient) { }
 

   

  
  findAll(): Observable<Movie[]>{
    //api request sur la notre backend
    //http get() => retourne un Observable
    return this.http.get<Movie[]>(`${API_BASE_URL}Film`);

  }
  sauvegarderFilm(movie: Movie): Observable<Movie> {
    console.log("controller");
    console.log("nomFIlm " +movie.nomFilm);
    console.log("nomFilmOriginal " +movie.nomFilmOriginal);
    console.log("description " +movie.description);
    console.log("affiche " +movie.afficheFilm);
    console.log("dateReal " +movie.dateRealisation);
    console.log("video"+ movie.video);
  
    
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
      
      }),
      withCredentials: true
    };
  
    
   
    return this.http.post<Movie>(`${API_BASE_URL}Film/Create`,  movie, httpOptions)
      
  }

  modifierFilm(movie:Movie, id: number) : Observable<Movie> {
    console.log(movie);


   
    return this.http.put<Movie>(`${API_BASE_URL}Film/Modif/{{id}}`, movie,
                            {
                             headers:new HttpHeaders()
                             .set('Content-Type','application/json')
                             });
                             


  }
 
 
}
