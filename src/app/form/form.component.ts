import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public uname = "";
  public psw = "";
  public isDisable = true;
  public hasErroru = true;
  public hasErrorp = true;

  constructor() { }

  ngOnInit(){
  }

  onClick(u, p){
    if(u.value == ""){
      this.hasErroru= false;
      console.log(this.hasErroru);
    }
    if(p.value == ""){
      this.hasErrorp= false;
      console.log(this.hasErrorp);
    }
    else{
      this.hasErroru= true;
      this.hasErrorp= true;
      alert("login success");
    }
  //  this.hasError =u.value == '' || p.value == '' ? false : true; 
    console.log(u.value);
    console.log(p.value);
    
    
  }
  
  
}
