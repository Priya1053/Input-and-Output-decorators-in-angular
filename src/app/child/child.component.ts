import { Component,Input,Output,EventEmitter } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent {
  @Input()  item:any;
  @Output() updatedataEvent = new EventEmitter<string>();
 
constructor(){
  console.log(this.item)
}
}
