import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyresponseComponent } from './emergencyresponse.component';

describe('EmergencyresponseComponent', () => {
  let component: EmergencyresponseComponent;
  let fixture: ComponentFixture<EmergencyresponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyresponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
