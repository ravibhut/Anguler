import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HTTPandObservablesComponent } from './httpand-observables.component';

describe('HTTPandObservablesComponent', () => {
  let component: HTTPandObservablesComponent;
  let fixture: ComponentFixture<HTTPandObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HTTPandObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HTTPandObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
