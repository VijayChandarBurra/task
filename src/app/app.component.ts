import { Component } from '@angular/core';
import { ErrormsgsComponent } from  './errormsgs/errormsgs.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  firstName:string;
  customer:any;
  customerInfoFields:string[];
  customerInputs:boolean=false;

  constructor(){
  }

  onSubmit(formInputs){
    this.customer = formInputs;
    this.customerInputs=true;
    this.customerInfoFields= Object.keys(this.customer)
  }

}
