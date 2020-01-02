import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatomenuComponent } from './candidatomenu/candidatomenu.component';
import { EmpresamenuComponent } from './empresamenu/empresamenu.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CandidatomenuComponent,
    EmpresamenuComponent,
    HeaderComponent
  ],
  exports: [
    CandidatomenuComponent,
    EmpresamenuComponent,
    HeaderComponent,
    RouterModule
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
