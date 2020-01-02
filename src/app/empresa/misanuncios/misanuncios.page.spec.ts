import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisanunciosPage } from './misanuncios.page';

describe('MisanunciosPage', () => {
  let component: MisanunciosPage;
  let fixture: ComponentFixture<MisanunciosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisanunciosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisanunciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
