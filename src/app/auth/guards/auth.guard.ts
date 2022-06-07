import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

constructor(private authService:AuthService,
            private router: Router){
}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> |  boolean  {


      return this.authService.verificaAutenticacion()
              .pipe(
                  tap( estaAutenticado => {

                        if(!estaAutenticado){
                          this.router.navigate(['./auth/login']);  
                        }

                  } )
                );

      /*
      if(this.authService.getAuth.id){
        return true;    
      }

      console.log('Bloqueado por AuthGuard:canActivate  ', false);
      return false;
      */
  }
  canLoad(

    

    route: Route,
    segments: UrlSegment[]): Observable<boolean>  | boolean  {

      
      console.log('AuthGuard:route', route);
      console.log('AuthGuard:segments', segments);

      return this.authService.verificaAutenticacion()
            .pipe(
                    tap( estaAutenticado => {

                          if(!estaAutenticado){
                            this.router.navigate(['./auth/login']);  
                          }

                    } )
              );
/* demostracion:
      if(this.authService.getAuth.id){
        console.log('AuthGuard:canload', true);
        return true;
      }

      console.log('Bloqueado por AuthGuard:canload  ', false);
    return false; */
  }
}
