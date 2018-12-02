import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpRequesterService {
  headers: HttpHeaders = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
  constructor(private http: HttpClient) { }

  checkUrl(url) {
    
    return this.http.get('http://127.0.0.1:4000/checkUrl/'+url, { headers: this.headers});
  }
}
