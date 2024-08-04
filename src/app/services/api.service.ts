import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const AUTH_TOKEN = window.sessionStorage.getItem('auth-token')
const httpOptions = {
  headers: new HttpHeaders({ 'x-access-token': `${AUTH_TOKEN}` })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api = "https://api.nytimes.com/svc/topstories/v2/art.json?api-key=WAXRz6cGFym3GChc468SZGDOO0QXNGpX"

  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
  getAllTopStoriesHome(): Observable<any[]> {
    const apiKey = 'WAXRz6cGFym3GChc468SZGDOO0QXNGpX';  // Replace with your actual API key

    return this.http.get<any[]>(`${this.api}`)
  }
  getCategory(id: string): Observable<any> {
    return this.http.get<any>(`${this.api}/category/${id}`)

  }
  getEl(): Observable<any> {
    return this.http.get<any>(`${this.api}/category/electronics`)

  }
  createItem(body: any): Observable<any> {
    let api = 'http://localhost:2022/api/app/'
    // const headers = new HttpHeaders()
    // .append('Authorization', 'Bearer ' + this.Token)
    // .append('content-type', 'application/json')

    return this.http.post(api + "create", body, httpOptions)
  }


  getJew(): Observable<any> {
    return this.http.get<any>(`${this.api}/category/jewelery`)

  }
  getWomen(): Observable<any> {
    return this.http.get<any>(`${this.api}/category/women's clothing`)

  }
  getMen(): Observable<any> {
    return this.http.get<any>(`${this.api}/category/men's clothing`)

  }


}
