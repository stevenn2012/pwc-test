import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwcColombiaComponent } from './pwc-colombia.component';

describe('PwcColombiaComponent', () => {
  let component: PwcColombiaComponent;
  let fixture: ComponentFixture<PwcColombiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwcColombiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwcColombiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
