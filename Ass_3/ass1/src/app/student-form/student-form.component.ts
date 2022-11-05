import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  isSubmit:boolean =false;
  name!:string ;
  email!:string;
  contactno!:number;
  birthdate!:Date;
  constructor() { }

  ngOnInit(): void {

  }
  handleSubmit(){
 console.log(name);
    this.isSubmit=true;
  }
  student:any=[];
}
