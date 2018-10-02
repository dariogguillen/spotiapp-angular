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
      'Authorization': 'Bearer BQD7HaUWgZcxKiO34Rk8obffxPiiaUgnP9XnQKGO6LmhMLAZyA5kx-Ce4_nJJpwtwgy3Qsi0jzTpjq1E8Qc'
    });
    const AuthRequest = request.clone({ headers });
    return next.handle(AuthRequest);
  }
}
