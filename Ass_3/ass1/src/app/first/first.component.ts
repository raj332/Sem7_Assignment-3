import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name :string ="raj";
   contactNumber: number = 9478778787;
   birthdate : Date =new Date ('03/03/2002');
  constructor() { }

  ngOnInit(): void {
  }

}
