import { Component, OnInit } from '@angular/core';
// import { HttpClient} from '@angular/common/http';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public Datas = [];

  constructor(
    private _dataServices: DataService,
    private router: Router
  ) { }

 
  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(){
    this._dataServices.getdata() 
    .subscribe(data => this.Datas = data);
  }

  editUser(id){
    this.router.navigate(['/user/' + id]);
  }


  deleteUser(id){
    if (confirm("Are you sure?")) {
      console.log('Yes');
      this._dataServices.deleteUser(id) 
        .subscribe(data => 
          this.getUserData()
          );
    } else {
      console.log('No');
    }
  }

}
