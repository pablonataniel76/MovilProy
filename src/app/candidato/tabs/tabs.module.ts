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
    children: [
      {
        path: 'anuncios',
        loadChildren: '../anuncios/anuncios.module#AnunciosPageModule'
      },
      {
        path: 'curriculum',
        loadChildren: '../curriculum/curriculum.module#CurriculumPageModule'
      },
      {
        path: 'perfil',
        loadChildren: '../perfil/perfil.module#PerfilPageModule'
      },
      {
        path: 'habilidades',
        loadChildren: '../habilidades/habilidades.module#HabilidadesPageModule'
      },
      {
        path: 'experiencia',
        loadChildren: '../experiencia/experiencia.module#ExperienciaPageModule'
      },
      {
        path: 'idioma',
        loadChildren: '../idioma/idioma.module#IdiomaPageModule'
      },
      {
        path: 'cursos',
        loadChildren: '../cursos/cursos.module#CursosPageModule'
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
