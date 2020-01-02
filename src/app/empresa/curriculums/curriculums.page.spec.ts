import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumsPage } from './curriculums.page';

describe('CurriculumsPage', () => {
  let component: CurriculumsPage;
  let fixture: ComponentFixture<CurriculumsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurriculumsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
