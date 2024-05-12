import { Routes } from '@angular/router';
import {SandboxComponent} from './pages/sandbox/sandbox.component'
import { ButtonComponent } from './components/button/button.component'

export const routes: Routes = [
    {
        path: "sandbox",
        component: SandboxComponent,
    },
    {
        path: "",
        redirectTo:"sandbox",
        pathMatch:"full"
    },
    {
        path:"button",
        component: ButtonComponent
    }
];
