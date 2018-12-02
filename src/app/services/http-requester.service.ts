import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpRequesterService {

  constructor(private http: HttpClient) { }

  checkUtl(url) {
    return this.http.get(url);
  }
}
