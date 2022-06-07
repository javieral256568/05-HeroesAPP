import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Auth } from '../interfaces/auth.interfaces';
import { tap, Observable, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL:string = environment.apiHeroesURL;
  private _auth: Auth | undefined;


  get getAuth(): Auth{
  
    return {...this._auth! };
  }

  constructor(private http: HttpClient
              ) { 
  }

  // se debe crear un Observable con retorno de tipo observable.
  // regresa un observable 
  verificaAutenticacion(): Observable<boolean>{
    if(!localStorage.getItem('id')){
      return  of(false); // retorna un observable del argumento false
    }    



    return this.http.get<Auth>(`${this.apiURL}/usuarios/1`)
            .pipe( 
              // map es usado para transformar 
              //lo que se recibe del operador anterior (el observable)
              // y transformalo y a su vez retornar un nuevo valor.
                map( auth => {
                                console.log('verificaAutenticacion , map', auth);
                                this._auth = auth;
                                return true;
                            } 
                  )
              );


  }

  login() {
  
    return this.http.get<Auth>(`${this.apiURL}/usuarios/1`)
                    .pipe(
                            tap( resp =>  this._auth = resp ),
                            tap( resp => localStorage.setItem('id',  resp.id) )

                        )
  }

}
