import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpCustomInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log('intercepting request:->'+ req);
    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'application-custom-header': 'test'
      }
    });

    return next.handle(req);
  }
}
