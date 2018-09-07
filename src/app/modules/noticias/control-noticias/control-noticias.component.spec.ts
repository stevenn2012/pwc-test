import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlNoticiasComponent } from './control-noticias.component';

describe('ControlNoticiasComponent', () => {
  let component: ControlNoticiasComponent;
  let fixture: ComponentFixture<ControlNoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlNoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
