import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasUltimaSemanaComponent } from '../noticias-ultima-semana.component';

describe('NoticiasUltimaSemanaComponent', () => {
  let component: NoticiasUltimaSemanaComponent;
  let fixture: ComponentFixture<NoticiasUltimaSemanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasUltimaSemanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasUltimaSemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
