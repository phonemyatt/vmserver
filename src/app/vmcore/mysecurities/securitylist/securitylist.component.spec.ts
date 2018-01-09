import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritylistComponent } from './securitylist.component';

describe('SecuritylistComponent', () => {
  let component: SecuritylistComponent;
  let fixture: ComponentFixture<SecuritylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuritylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
