import { ChangeDetectorRef, Component, inject } from '@angular/core';
import {Movies} from '../../models/movies';
import {MoviesService} from '../../services/movies.service'

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {
  MoviesService = inject(MoviesService);
  MoviesList: Movies[] =this.MoviesService.getMovies();
  removeMovie(movieId: number): void {
    this.MoviesList = this.MoviesList.filter(movie => movie.id !== movieId);
    console.log(this.MoviesList);
  }
}
