import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WildcardRouteandRedirectingRoutesComponent } from './wildcard-routeand-redirecting-routes.component';

describe('WildcardRouteandRedirectingRoutesComponent', () => {
  let component: WildcardRouteandRedirectingRoutesComponent;
  let fixture: ComponentFixture<WildcardRouteandRedirectingRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildcardRouteandRedirectingRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildcardRouteandRedirectingRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
