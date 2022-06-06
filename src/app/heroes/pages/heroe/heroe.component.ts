import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  @Input() heroe!: Heroe;

  constructor(private activatedRoute: ActivatedRoute, 
              private heroesService: HeroesService) { }

  ngOnInit(): void {
    
    // Forma elegante: OK
      this.activatedRoute.params
      .pipe(
          switchMap( ({id}) => this.heroesService.getHeroe(id) )
      )
      .subscribe( nextHeroe => {
                                this.heroe = nextHeroe;
                                console.log('Heroe:',this.heroe)
                              }
      )

    
  }


    /* NOTA: usando un subscribe anidado 
    this.activatedRoute.params
    .subscribe( ({ id}) => {
                                console.log('HeroeComponent_id:',id)

                                this.heroesService.getHeroe(id)
                                .subscribe( nextHeroe => {
                                                this.heroe = nextHeroe;
                                                console.log('Heroe:',this.heroe)
                                            }
                                )

                            })
    }*/





  

}
