import { Component, OnInit } from '@angular/core';
import {SuperHeros} from './superheros';
@Component({
  selector: 'app-custompipes',
  templateUrl: './custompipes.component.html',
  styleUrls: ['./custompipes.component.css']
})
export class CustompipesComponent implements OnInit {
  superHeros:SuperHeros[];
  constructor() { }

  ngOnInit(): void {
    this.superHeros = [
      {id:1,name:"iron mane"},
      {id:2,name:"thor"},
      {id:3,name:"captain america"},
      {id:4,name:"hulk"},
    ];
  }

}
