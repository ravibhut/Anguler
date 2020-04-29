import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingaServiceComponent } from './usinga-service.component';

describe('UsingaServiceComponent', () => {
  let component: UsingaServiceComponent;
  let fixture: ComponentFixture<UsingaServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingaServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingaServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
