import { Component } from '@angular/core';
import {ButtonComponent} from '../../components/button/button.component'

@Component({
  selector: 'app-sandbox',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './sandbox.component.html',
  styleUrl: './sandbox.component.scss'
})
export class SandboxComponent {
  disabled: boolean = true;
  title="sandbox"
  counter: number = 0;
  changeCounter(changer:number){
    this.counter+=changer;
    if(this.counter==0)
      {
        this.disabled=true;
      } else 
      {
        this.disabled=false
      }
  }
}
