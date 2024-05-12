import { Routes } from '@angular/router';
import {SandboxComponent} from './pages/sandbox/sandbox.component'
import { ButtonComponent } from './components/button/button.component'
import { MoviesComponent } from './pages/movies/movies.component';

export const routes: Routes = [
    {
        path: "sandbox",
        component: SandboxComponent,
    },
    {
        path: "",
        redirectTo:"movies",
        pathMatch:"full"
    },
    {
        path:"button",
        component: ButtonComponent
    },
    {
        path:"movies",
        component: MoviesComponent
    }
];
