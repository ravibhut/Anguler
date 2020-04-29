import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HTTPErrorHandlingComponent } from './httperror-handling.component';

describe('HTTPErrorHandlingComponent', () => {
  let component: HTTPErrorHandlingComponent;
  let fixture: ComponentFixture<HTTPErrorHandlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HTTPErrorHandlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HTTPErrorHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
