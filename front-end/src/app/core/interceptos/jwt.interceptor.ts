// import {
//   HttpEvent,
//   HttpHandler,
//   HttpInterceptor,
//   HttpRequest,
// } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable()
// export class JwtInterceptor implements HttpInterceptor {
//   constructor()
//   {}

//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     const user = this.accountService.userValue;
//     const loggedIn = user && user.token;
//     if (loggedIn) {
//       req = req.clone({
//         setHeaders: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       });
//     }
//     return next.handle(req);
//   }
// }
