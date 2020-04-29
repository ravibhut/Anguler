import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamMapObservableComponent } from './param-map-observable.component';

describe('ParamMapObservableComponent', () => {
  let component: ParamMapObservableComponent;
  let fixture: ComponentFixture<ParamMapObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamMapObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamMapObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
