import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingandNavigationComponent } from './routingand-navigation.component';

describe('RoutingandNavigationComponent', () => {
  let component: RoutingandNavigationComponent;
  let fixture: ComponentFixture<RoutingandNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingandNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingandNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
