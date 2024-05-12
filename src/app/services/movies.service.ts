import { Injectable } from '@angular/core';
import {Movies} from '../models/movies'
import {MOVIES} from '../../data/movies'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
  constructor() { }

  getMovies() : Movies[] {
    return MOVIES;
  }

  
}
