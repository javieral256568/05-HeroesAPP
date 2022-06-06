import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';


import { Routes, RouterModule } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe!: Heroe;
  
  constructor(private heroesService: HeroesService) { }



  ngOnInit(): void {
    
    
  }

  
  


}
