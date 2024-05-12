import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() disabled : boolean=false;
  @Input() changer!:number;
  @Input() buttonText ="";
  @Output() counterChanger = new EventEmitter<number>();
  changeCounter(){
    this.counterChanger.emit(this.changer)
    console.log(`${this.buttonText} was clicked, value is ${this.changer}`)
  }
}
