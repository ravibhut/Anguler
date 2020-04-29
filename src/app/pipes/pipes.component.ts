import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  public name = "welcome to Rapidops";
  public person ={
    "firstName" : "john",
    "lastName" : "Doe"
  }

  public date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
