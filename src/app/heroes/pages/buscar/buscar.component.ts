import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import {Observable} from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  heroes: Heroe[] = [];
  terminosBusqueda: string = '';
  
  heroeSeleccionadoInfo!: Heroe;



  buscar(){
    this.heroesService.geAutocompleteHeroes(this.terminosBusqueda)
    .subscribe(nextHeroes => this.heroes = nextHeroes)
  }


  opSeleccionada(event: MatAutocompleteSelectedEvent){
    console.log(event);
   const heroeSlected: Heroe = event.option.value;
   this.terminosBusqueda = heroeSlected.superhero;

    this.heroesService.getHeroe( heroeSlected.id! )
    .subscribe( resp => this.heroeSeleccionadoInfo= resp)

  }


  constructor(private heroesService:HeroesService) { }

  ngOnInit(): void {
   
  }

  

}
