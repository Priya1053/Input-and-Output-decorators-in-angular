import { Component , Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
 

 
//child - to - parent

myfun(){
  alert("function called from parent class into child class")
}

  //parent - to - child
    mydata='Enter data in textbox';
    myfunction(item:string)
    {
      console.warn(item);
      this.mydata=item;
    }
}

