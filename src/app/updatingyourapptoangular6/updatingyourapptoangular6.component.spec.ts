import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatingyourapptoangular6Component } from './updatingyourapptoangular6.component';

describe('Updatingyourapptoangular6Component', () => {
  let component: Updatingyourapptoangular6Component;
  let fixture: ComponentFixture<Updatingyourapptoangular6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Updatingyourapptoangular6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Updatingyourapptoangular6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
