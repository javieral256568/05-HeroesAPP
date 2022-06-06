import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';

import { HeroeComponent } from './pages/heroe/heroe.component';
import { AgergarHeroeComponent } from './pages/agergar-heroe/agergar-heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

const routes : Routes = [
    {
      path:'',
      component: HomeComponent,
      children:[
                {
                  path: 'listado',
                  component: ListadoComponent
                },
                {
                  path:'agregar',
                  component: AgergarHeroeComponent
                },
                {
                  path:'editar/:id',
                  component: AgergarHeroeComponent
                },
                {
                  path:'buscar',
                  component: BuscarComponent
                },
                {
                  path: ':id',
                  component: HeroeComponent
                },
                {
                  path: '**',
                  redirectTo: 'listado'
                }        
      ]
    }
]

@NgModule({
  
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
