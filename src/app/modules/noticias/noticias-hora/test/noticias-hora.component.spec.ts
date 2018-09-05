import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasHoraComponent } from '../noticias-hora.component';

describe('NoticiasHoraComponent', () => {
  let component: NoticiasHoraComponent;
  let fixture: ComponentFixture<NoticiasHoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasHoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasHoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
