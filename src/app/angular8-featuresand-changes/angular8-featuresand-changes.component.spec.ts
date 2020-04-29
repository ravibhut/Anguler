import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular8FeaturesandChangesComponent } from './angular8-featuresand-changes.component';

describe('Angular8FeaturesandChangesComponent', () => {
  let component: Angular8FeaturesandChangesComponent;
  let fixture: ComponentFixture<Angular8FeaturesandChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular8FeaturesandChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular8FeaturesandChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
