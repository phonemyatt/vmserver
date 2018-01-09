import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityitemComponent } from './securityitem.component';

describe('SecurityitemComponent', () => {
  let component: SecurityitemComponent;
  let fixture: ComponentFixture<SecurityitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
