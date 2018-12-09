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
    return this.http.get(environment.baseUrl + '/app/checkUrl/', { headers: this.headers, params: params });
  }

  generateUrl(url) {
    return this.http.post(environment.baseUrl + '/app/saveUrl/', { originUrl: url }, { headers: this.headers }).pipe(map((result: any) => {
      result.shortUrl = environment.baseUrl + '/' + result.shortUrl;
      return result;
    }));
  }

  checkShortUrl(url){
    const params = new HttpParams().set('url', url);
    return this.http.get(environment.baseUrl + '/app/check-short/', { headers: this.headers, params: params });
  }

  patchShortUrl(originUrl,url) {
    console.log('444545')
    return this.http.put(environment.baseUrl + '/app/update-short/', { originUrl: originUrl, shortUrl: url}, { headers: this.headers }).pipe(map((result: any) => {
      result.shortUrl = environment.baseUrl + '/' + result.shortUrl;
      return result;
    }));
  }
}
