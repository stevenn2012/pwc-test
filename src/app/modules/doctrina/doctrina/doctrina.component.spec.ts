import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctrinaComponent } from './doctrina.component';

describe('DoctrinaComponent', () => {
  let component: DoctrinaComponent;
  let fixture: ComponentFixture<DoctrinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctrinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctrinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
