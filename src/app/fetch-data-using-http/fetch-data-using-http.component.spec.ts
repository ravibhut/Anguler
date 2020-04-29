import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchDataUsingHTTPComponent } from './fetch-data-using-http.component';

describe('FetchDataUsingHTTPComponent', () => {
  let component: FetchDataUsingHTTPComponent;
  let fixture: ComponentFixture<FetchDataUsingHTTPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchDataUsingHTTPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchDataUsingHTTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
