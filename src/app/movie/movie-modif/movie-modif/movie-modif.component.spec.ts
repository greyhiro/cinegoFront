import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieModifComponent } from './movie-modif.component';

describe('MovieModifComponent', () => {
  let component: MovieModifComponent;
  let fixture: ComponentFixture<MovieModifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieModifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
