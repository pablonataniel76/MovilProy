import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { IntroGuard } from './guards/intro.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'intro', loadChildren: './intro/intro.module#IntroPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule',   canActivate: [LoginGuard, IntroGuard]
  },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'candidato', loadChildren: './candidato/tabs/tabs.module#TabsPageModule' },
  { path: 'anuncios', loadChildren: './candidato/anuncios/anuncios.module#AnunciosPageModule' },
  { path: 'perfil', loadChildren: './candidato/perfil/perfil.module#PerfilPageModule' },
  { path: 'curriculum', loadChildren: './candidato/curriculum/curriculum.module#CurriculumPageModule' },
  { path: 'empresa', loadChildren: './empresa/tabs/tabs.module#TabsPageModule' },
  // { path: 'anunciosempresa', loadChildren: './empresa/anuncios/anuncios.module#AnunciosPageModule' },
  // { path: 'perfilempres', loadChildren: './empresa/perfil/perfil.module#PerfilPageModule' },
  { path: 'misanuncios', loadChildren: './empresa/misanuncios/misanuncios.module#MisanunciosPageModule' },
  { path: 'perfilempresa', loadChildren: './empresa/perfilempresa/perfilempresa.module#PerfilempresaPageModule' },
  { path: 'candidato/idioma', loadChildren: './candidato/idioma/idioma.module#IdiomaPageModule' },
  { path: 'candidato/experiencia', loadChildren: './candidato/experiencia/experiencia.module#ExperienciaPageModule' },
  { path: 'candidato/cursos', loadChildren: './candidato/cursos/cursos.module#CursosPageModule' },
  { path: 'candidato/habilidades', loadChildren: './candidato/habilidades/habilidades.module#HabilidadesPageModule' },
  { path: 'curriculums', loadChildren: './empresa/curriculums/curriculums.module#CurriculumsPageModule' },
  { path: 'empresa/publicar', loadChildren: './empresa/publicar/publicar.module#PublicarPageModule' },
  { path: 'empresa/postulantes', loadChildren: './empresa/postulantes/postulantes.module#PostulantesPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
