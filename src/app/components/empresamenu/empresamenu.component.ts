import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresamenu',
  templateUrl: './empresamenu.component.html',
  styleUrls: ['./empresamenu.component.scss'],
})
export class EmpresamenuComponent implements OnInit {

  components: Componente[] = [
    {
      icon: 'briefcase',
      name: 'Publicar Anuncio',
      redirectTo: 'publicar'
    },
    {
      icon: 'briefcase',
      name: 'Postulantes',
      redirectTo: 'postulantes'
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
