import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie-service.service';
import { Movie } from '../../models/movie';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  
})


export class MoviesListComponent implements OnInit {
  movies : Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {

    this.movieService.findAll().subscribe(Tabmovies => this.movies = Tabmovies, error => console.log("Problème avec la récupération des films ....") )

  }

}
