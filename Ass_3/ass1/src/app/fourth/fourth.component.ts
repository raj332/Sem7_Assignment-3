import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {

  constructor() { }
  isTextBox:Boolean= true;
 displayInput(id:any){
  id=="textarea"?this.isTextBox=false:this.isTextBox=true;
 }
  ngOnInit(): void {
  }

}
