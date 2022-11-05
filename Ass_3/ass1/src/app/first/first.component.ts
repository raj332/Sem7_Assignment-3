import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name :string ="jaimin";
   contactNumber: number = 8795632356;
   birthdate : Date =new Date ('12/18/2001');
  constructor() { }

  ngOnInit(): void {
  }

}
