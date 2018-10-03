import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCMn_fvu7Iv5hTtD6FaTERzFZ7x6ugKnchyLRxuq2Yqu2kCUp7o97ILirmPHuzG9J2r0hrJ9cY8cgEeZyI'
    });
    const AuthRequest = request.clone({ headers });
    return next.handle(AuthRequest);
  }
}
