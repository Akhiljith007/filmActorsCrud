import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcontactsComponent } from './allcontacts.component';

describe('AllcontactsComponent', () => {
  let component: AllcontactsComponent;
  let fixture: ComponentFixture<AllcontactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllcontactsComponent]
    });
    fixture = TestBed.createComponent(AllcontactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
