import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceitemComponent } from './deviceitem.component';

describe('DeviceitemComponent', () => {
  let component: DeviceitemComponent;
  let fixture: ComponentFixture<DeviceitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
