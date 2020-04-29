import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // template: `<div>
  //               Welcome {{name}}
  //             </div>
  //             <h2>{{ name.length }}</h2>
  //             <h2>{{ greetUser() }}</h2>
  //             <h2>{{name}}</h2>
  //             `,
  // template: `
  //           <h2>
  //             welcome {{ name }}
  //           </h2>
  //           <input [id]="myid" type="text" value="ram">
  //           <input  bind-disabled = "isDisable" id="{{myid}}" type="text" value="ram">
  // `,
  // template: `
  //           <h2>
  //             welcome {{ name }}
  //           </h2>
  //           <h2 class = "text-success">Rapidops</h2>
  //           <h2 [class] = "successClass">Rapidops</h2>
  //           <h2 [class.text-danger]="hasError" > Error  </h2>

  //           <h2 [ngClass]="massageClasses">ngClass</h2>

  // `,
  // template: `
  //           <h2>
  //             welcome {{ name }}
  //           </h2>
  //           <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>
  //           <h2 [style.color]="highlightColor">Style Binding 2</h2>
  //           <h2 [ngStyle]="titleStyles">Style Binding 3</h2>
    
  // `,
  template: `
            <h2>
              welcome {{ name }}
            </h2>
            <button (click)= "onClick()">Greet</button>
            {{ greeting }}
  `,
  styles: [
    `
     
    `,
  ],
  // styles: [
  //   `
  //     div {
  //       color: red;
  //     }
  //     .text-success {
  //       color:green;
  //     }
  //     .text-danger {
  //       color: red;
  //     }
  //     .text-special {
  //       font-style: italic
  //     }
  //   `,
  // ],
})
export class TestComponent implements OnInit {
  public name = "Ravi";
  public myid = "testId";
  public isDisable = true;
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;
  public massageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  public highlightColor = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "oblique",
  }
  public greeting = "";


  constructor() {}

  ngOnInit(){
     
  }
  onClick(){
    console.log("welcome to Repidops" )
    this.greeting = "welcome to Repidops";
  }
  greetUser(){
    return "hello" + this.name;
  }

}
