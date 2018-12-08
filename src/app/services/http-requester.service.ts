import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpRequesterService {
  headers: HttpHeaders = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
  constructor(private http: HttpClient) { }

  checkUrl(url) {
    const params = new HttpParams().set('url', url);
    return this.http.get( environment.baseUrl + '/checkUrl/', { headers: this.headers, params: params});
  }
}
