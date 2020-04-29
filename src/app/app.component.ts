// import { Component, OnInit } from '@angular/core';
// import { RestService } from './rest.service';
// // import { Users } from './Users';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   // title = 'login form';

//   constructor(private rs : RestService) {}
//   columns = ["userId", "firstName", "lastName", "phoneNumber", "emailAddress"];
//   index = ["userId", "firstName", "lastName", "phoneNumber", "emailAddress"];

//   // users : Users[] = [];

//   ngOnInit(): void {
//     this.rs.getUsers().subscribe
//     (
//       (response)=>
//       {
//         this.users = response;
//       },
//       (error) => console.log(error)
     
//     )
//   }
// }




import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ravi';
  
}

