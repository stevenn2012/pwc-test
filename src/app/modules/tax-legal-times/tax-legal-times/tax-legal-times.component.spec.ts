import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxLegalTimesComponent } from './tax-legal-times.component';

describe('TaxLegalTimesComponent', () => {
  let component: TaxLegalTimesComponent;
  let fixture: ComponentFixture<TaxLegalTimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxLegalTimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxLegalTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
