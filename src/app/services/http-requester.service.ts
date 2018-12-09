import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpRequesterService {
  headers: HttpHeaders = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });
  constructor(private http: HttpClient) { }

  checkUrl(url) {
    const params = new HttpParams().set('url', url);
    return this.http.get(environment.baseUrl + '/checkUrl/', { headers: this.headers, params: params });
  }

  generateUrl(url) {
    return this.http.post(environment.baseUrl + '/saveUrl/', { originUrl: url }, { headers: this.headers }).pipe(map((result: any) => {
      result.shortUrl = environment.baseUrl + '/' + result.shortUrl;
      return result;
    }));
  }

  checkShortUrl(url){
    const params = new HttpParams().set('url', url);
    return this.http.get(environment.baseUrl + '/check-short/', { headers: this.headers, params: params });
  }
}
