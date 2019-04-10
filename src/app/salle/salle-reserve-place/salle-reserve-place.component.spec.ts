import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleReservePlaceComponent } from './salle-reserve-place.component';

describe('SalleReservePlaceComponent', () => {
  let component: SalleReservePlaceComponent;
  let fixture: ComponentFixture<SalleReservePlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalleReservePlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalleReservePlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
