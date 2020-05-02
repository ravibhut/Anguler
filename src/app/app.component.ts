import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupName, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isEdit: boolean;
  constructor(){

  }

  ngOnInit(){
    
  }
  // topics = [
  //   { key: 0, value: 'Angular'},
  //   { key: 1, value: 'Vue'},
  //   { key: 2, value: 'React'}
  // ];
  topics = [ 'Angular','Vue','React' ];
  registrationForm = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    topic: new FormControl(''),
    timePreferemce: new FormControl(''),
    cheak1: new FormControl(''),
  });
    
  loadApiData() {
    this.registrationForm.setValue({
      userName:'ravi',
      email: 'ravi@gmail.com',
      phone: '0000000000',
      topic: 'Angular',
      timePreferemce: 'morning',
      cheak1: true,
    });  
  }

  edit(){
    const user  = JSON.parse(localStorage.getItem('user'));
    console.log('user', user);
    this.registrationForm.setValue({
      userName: user.userName,
      email: user.email,
      phone: user.phone,
      topic: user.topic,
      timePreferemce: user.timePreferemce,
      cheak1: user.cheak1,
    });  
  }

  submit() {
    console.log('form value', this.registrationForm.value);
    localStorage.setItem('user', JSON.stringify(this.registrationForm.value));
    this.registrationForm.reset();
    this.isEdit = true;
  }
}
