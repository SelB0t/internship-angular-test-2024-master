import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  title = 'internship-angular-test-2024';
 
}
