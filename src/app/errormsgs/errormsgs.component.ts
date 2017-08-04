import { Component, OnInit,Input } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-errormsgs',
  templateUrl: './errormsgs.component.html',
  styleUrls: ['./errormsgs.component.css']
})
export class ErrormsgsComponent implements OnInit {
  @Input() name: string;
  @Input() currentElem: string;
  //@Input() targetedElem:String;

  constructor() { 

  }

  ngOnInit() {
  }
  check(e){
    console.log(e.errors);
  }

}
