import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalRouteParametersComponent } from './optional-route-parameters.component';

describe('OptionalRouteParametersComponent', () => {
  let component: OptionalRouteParametersComponent;
  let fixture: ComponentFixture<OptionalRouteParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionalRouteParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionalRouteParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
