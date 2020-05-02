import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id: number;
  name: string;
  lastname: string;

  constructor(
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
  
    
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log('params', params);
      this.id = params.id;
    });
    // this.name = 'Ravi';
    // this.lastname = 'Bhut';
    if(this.id){
      this.dataService.getUserById(this.id).subscribe(
        (response) => {
          console.log('response', response);
          this.name = response.name;
          this.lastname = response.lastname;
        }
      )
    }
  }

  addUser() {
    if(this.name === '' && this.lastname ===''){
      alert('Please enter all values');
      return;
    }
    console.log('name', this.name);
    console.log('lastname', this.lastname);
    const param = {
      name: this.name,
      lastname: this.lastname, 
    }
   this.dataService.createUser( param ).subscribe((response)=>{
     console.log('response', response);
     alert('Data added successfully.');
     this.router.navigate(['/']);
   });
  }

  editUser(){
    if(this.name === '' && this.lastname ===''){
      alert('Please enter all values');
      return;
    }
    console.log('name', this.name);
    console.log('lastname', this.lastname);
    const param = {
      id: this.id,
      name: this.name,
      lastname: this.lastname, 
    }
   this.dataService.updateUser( param ).subscribe((response)=>{
     console.log('response', response);
     alert('Data updated successfully.');
     this.router.navigate(['/']);
   });
  }

}
