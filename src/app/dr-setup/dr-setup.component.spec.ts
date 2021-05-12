import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrSetupComponent } from './dr-setup.component';

describe('DrSetupComponent', () => {
  let component: DrSetupComponent;
  let fixture: ComponentFixture<DrSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
