import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesPage } from './habilidades.page';

describe('HabilidadesPage', () => {
  let component: HabilidadesPage;
  let fixture: ComponentFixture<HabilidadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabilidadesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
