import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasDiaComponent } from '../noticias-dia.component';

describe('NoticiasDiaComponent', () => {
  let component: NoticiasDiaComponent;
  let fixture: ComponentFixture<NoticiasDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
