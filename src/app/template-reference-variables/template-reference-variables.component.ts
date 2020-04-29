import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-variables',
  templateUrl: './template-reference-variables.component.html',
  styleUrls: ['./template-reference-variables.component.css']
})
export class TemplateReferenceVariablesComponent implements OnInit {
  public myInput = "";
  constructor() { }

  ngOnInit(): void {
  }

  logMessage(value){
    console.log(value);
  }

}
