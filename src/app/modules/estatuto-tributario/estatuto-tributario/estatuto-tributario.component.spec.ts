import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatutoTributarioComponent } from './estatuto-tributario.component';

describe('EstatutoTributarioComponent', () => {
  let component: EstatutoTributarioComponent;
  let fixture: ComponentFixture<EstatutoTributarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstatutoTributarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatutoTributarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
