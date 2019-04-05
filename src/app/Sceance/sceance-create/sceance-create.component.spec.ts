import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SceanceCreateComponent } from './sceance-create.component';

describe('SceanceCreateComponent', () => {
  let component: SceanceCreateComponent;
  let fixture: ComponentFixture<SceanceCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceanceCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceanceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
