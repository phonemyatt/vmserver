import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceeditComponent } from './deviceedit.component';

describe('DeviceeditComponent', () => {
  let component: DeviceeditComponent;
  let fixture: ComponentFixture<DeviceeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
