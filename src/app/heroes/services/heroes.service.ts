import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private apiHeroesURL: string = environment.apiHeroesURL; 
  private pListHeroes: Heroe[] = [];

  get getListHeroes():Heroe[]{  
    return [...this.pListHeroes]
  }

  set setListHeroes(heroes: Heroe[]){
    this.pListHeroes = heroes;
  }





  constructor(private http: HttpClient ) { }

getHeroes(): Observable<Heroe[]>{

  

  return this.http.get<Heroe[]>(`${this.apiHeroesURL}/heroes`);
}

/*
geListHeroesAPI(){

   const httpSubscrito = this.http.get<Heroe[]>(`http://localhost:3000/heroes`)
      .subscribe( respHeroes => {
                                this.pListHeroes = respHeroes;
                                console.log('service:',this.pListHeroes)
                                }
      );
      httpSubscrito.unsubscribe();
}*/

getHeroe(heroe: string): Observable<Heroe>{
  return this.http.get<Heroe>(`${this.apiHeroesURL}/heroes/${ heroe }`);
}



geAutocompleteHeroes(busqueda: string): Observable<Heroe[]>{
  return this.http.get<Heroe[]>(`${this.apiHeroesURL}/heroes?q=${busqueda}&_limit=4`);
}

  agregarHeroe(heroe: Heroe): Observable<Heroe>{
    return this.http.post<Heroe>(`${this.apiHeroesURL}/heroes`,heroe);
  }


  editarHeroe(heroe: Heroe): Observable<Heroe>{
    return this.http.put<Heroe>(`${this.apiHeroesURL}/heroes/${heroe.id}`,heroe);
  }

  
  eliminarHeroe(heroe_id: string): Observable<any>{
    return this.http.delete<any>(`${this.apiHeroesURL}/heroes/${heroe_id}`);
  }

}
