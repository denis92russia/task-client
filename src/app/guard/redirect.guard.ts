import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpRequesterService } from '../services/http-requester.service';
import { map } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {
  constructor(private http: HttpRequesterService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const url = state.url.replace('/','');
      return this.http.redirectrequest(url).pipe(map(((result:any)=>{
        if(!result.succecc){
          return true;
        }
        document.location.href = result.originUrl;
        return false;
      })));
  }
}
