import { Component, OnInit } from '@angular/core';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-candidatomenu',
  templateUrl: './candidatomenu.component.html',
  styleUrls: ['./candidatomenu.component.scss'],
})
export class CandidatomenuComponent implements OnInit {

  components: Componente[] = [
    {
      icon: 'briefcase',
      name: 'Idiomas',
      redirectTo: 'idioma'
    },
    {
      icon: 'briefcase',
      name: 'Experiencia Laboral',
      redirectTo: 'experiencia'
    },
    {
      icon: 'school',
      name: 'Educacion',
      redirectTo: 'cursos'
    },
    {
      icon: 'briefcase',
      name: 'Cursos',
      redirectTo: 'cursos'
    },
    {
      icon: 'construct',
      name: 'Habilidades',
      redirectTo: 'habilidades'
    }
  ];
  constructor() { }

  ngOnInit() {}

}
interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}
