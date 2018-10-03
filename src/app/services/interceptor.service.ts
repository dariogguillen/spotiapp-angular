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
      'Authorization': 'Bearer BQAVgCXGesBzpIJj9ZrM_cHQwTR_AaZsqWUeE66bRectVGC6-rR486pqoDA0NEetpsknaYqOh74F3vm7tFQ'
    });
    const AuthRequest = request.clone({ headers });
    return next.handle(AuthRequest);
  }
}
