import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = "http://localhost:2022/api/auth/"

  constructor(private http: HttpClient) { }

  signup(fullName:string, email:string, password:string):Observable<any>{
    let roles = ["admin"]
    return this.http.post(this.api + "signup", {fullName,email,password,roles},httpOptions);

  }
  signin( email:any, password:any):Observable<any>{
    return this.http.post(this.api + "signin", {email,password},httpOptions);

  }
}
