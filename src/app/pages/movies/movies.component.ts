import {Component, inject } from '@angular/core';
import {Movies} from '../../models/movies';
import {MoviesService} from '../../services/movies.service'
import { NgClass, NgIf } from '@angular/common';
import { FormsModule,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [NgClass, FormsModule, NgIf],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {
  MoviesService = inject(MoviesService);

  isEditable: boolean = false;

  newTitle: string ="";
  editMovieid!: number;

  MoviesList: Movies[] =this.MoviesService.getMovies();



  removeMovie(movieId: number): void {
    this.MoviesList = this.MoviesList.filter(movie => movie.id !== movieId);
    this.isEditable =false;
    console.log(this.MoviesList);
  }

  editMovieForm(movieId: number, movieTitle: string): void{
    this.isEditable=true;
    this.editMovieid=movieId;
    
  }

  editTitle() {
    this.isEditable = false;
    const movieToUpdateIndex = this.MoviesList.findIndex(movie => movie.id === this.editMovieid);
    if (movieToUpdateIndex !== -1) {
      this.MoviesList[movieToUpdateIndex].title = this.newTitle;
    }
    this.isEditable=false;
    this.editMovieid=-1;
  }
  
}
