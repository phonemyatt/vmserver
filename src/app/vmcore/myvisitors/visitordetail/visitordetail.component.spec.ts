import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitordetailComponent } from './visitordetail.component';

describe('VisitordetailComponent', () => {
  let component: VisitordetailComponent;
  let fixture: ComponentFixture<VisitordetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitordetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitordetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
