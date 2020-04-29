import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular6NewFeaturesandChangesComponent } from './angular6-new-featuresand-changes.component';

describe('Angular6NewFeaturesandChangesComponent', () => {
  let component: Angular6NewFeaturesandChangesComponent;
  let fixture: ComponentFixture<Angular6NewFeaturesandChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular6NewFeaturesandChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular6NewFeaturesandChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
