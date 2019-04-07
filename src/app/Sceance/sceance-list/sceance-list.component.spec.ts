import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SceanceListComponent } from './sceance-list.component';

describe('SceanceListComponent', () => {
  let component: SceanceListComponent;
  let fixture: ComponentFixture<SceanceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceanceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
