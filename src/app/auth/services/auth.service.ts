import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Auth } from '../interfaces/auth.interfaces';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL:string = environment.apiHeroesURL;
  private _auth: Auth | undefined;


  get getAuthUser(): Auth{
  
    return {...this._auth! };
  }

  constructor(private http: HttpClient
              ) { 
  }


  login() {
  
    return this.http.get<Auth>(`${this.apiURL}/usuarios/1`)
                    .pipe(
                            tap( resp =>  {console.log('AUTHSERVICE', resp);
                                            this._auth = resp;
                                          }
                            )
                        )
  }

}
