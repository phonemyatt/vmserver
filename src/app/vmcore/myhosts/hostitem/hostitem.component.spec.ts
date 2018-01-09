import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostitemComponent } from './hostitem.component';

describe('HostitemComponent', () => {
  let component: HostitemComponent;
  let fixture: ComponentFixture<HostitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
