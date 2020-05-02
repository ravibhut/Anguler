import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { myData } from './data';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _url: string = "http://localhost:2222/products";
  constructor(private http: HttpClient) { }

  getdata(): Observable<myData[]>{
    return this.http.get<myData[]>(this._url);
  }
  createUser(addForm): Observable<myData[]> {
    console.log('addform', addForm);
    
    return this.http.post<myData[]>(this._url, addForm);
  }

  getUserById(id: number): Observable<myData> {
    return this.http.get<myData>(this._url +'/'+ id);
  }

  updateUser(user): Observable<myData> {
    return this.http.put<myData>(this._url+'/' + user.id, user);
  }

  deleteUser(id: number): Observable<myData[]> {
    return this.http.delete<myData[]>(this._url + '/'+ id);
  }
 
}
