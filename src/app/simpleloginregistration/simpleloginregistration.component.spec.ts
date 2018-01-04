import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleloginregistrationComponent } from './simpleloginregistration.component';

describe('SimpleloginregistrationComponent', () => {
  let component: SimpleloginregistrationComponent;
  let fixture: ComponentFixture<SimpleloginregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleloginregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleloginregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
