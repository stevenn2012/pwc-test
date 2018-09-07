import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JurisprudenciaComponent } from './jurisprudencia.component';

describe('JurisprudenciaComponent', () => {
  let component: JurisprudenciaComponent;
  let fixture: ComponentFixture<JurisprudenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JurisprudenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JurisprudenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
