import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { environment } from 'src/environments/environment';

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
    console.log(movie);
    return this.http.post<Movie>(`${API_BASE_URL}Film/Create`, movie);
  }

}
