import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from "../../interfaces/heroes.interface";
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-agergar-heroe',
  templateUrl: './agergar-heroe.component.html',
  styles: [
  ]
})
export class AgergarHeroeComponent implements OnInit {

  creadores = [ {id:'DC Comics', desc: 'DC - Comicas'},
                {id:'Marvel Comics', desc: 'Marvel - Comicas'}
              ]


  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  };

  guardar(heroe: Heroe){
  
    //console.log(heroe)
    if(this.heroe.superhero.trim().length === 0){
      return;
    }

    if(this.heroe.id){ //ACTUALIZAR
      
      this.heroesService.editarHeroe(this.heroe)
        .subscribe( heroe => { console.log('heroe actualizado:',heroe)  })
    }
    else { //AGERGAR
      this.heroesService.agregarHeroe(this.heroe)
      .subscribe(heroe => {
                            console.log('agregarHeroe, Respuesta:',heroe);
                            this.router.navigate(['/heroes/editar', heroe.id]);
      });
    }
 
  }


  eliminar(){
    

    this.heroesService.eliminarHeroe(this.heroe.id!)
      .subscribe( resp => {
          this.router.navigate(['/heroes']);
      });
  }



  constructor(private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe( 
      switchMap( ({id}) => this.heroesService.getHeroe(id))
      )
    .subscribe( resp_heroe => this.heroe = resp_heroe);



  }




}
