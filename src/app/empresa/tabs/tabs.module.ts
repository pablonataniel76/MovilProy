import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'anuncios',
        loadChildren: '../misanuncios/misanuncios.module#MisanunciosPageModule'
      },
      {
        path: 'perfil',
        loadChildren: '../perfilempresa/perfilempresa.module#PerfilempresaPageModule'
      },
      {
        path: 'curriculums',
        loadChildren: '../curriculums/curriculums.module#CurriculumsPageModule'
      },
      {
        path: 'postulantes',
        loadChildren: '../postulantes/postulantes.module#PostulantesPageModule'
      },
      {
        path: 'publicar',
        loadChildren: '../publicar/publicar.module#PublicarPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
