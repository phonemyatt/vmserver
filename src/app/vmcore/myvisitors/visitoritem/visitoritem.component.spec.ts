import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitoritemComponent } from './visitoritem.component';

describe('VisitoritemComponent', () => {
  let component: VisitoritemComponent;
  let fixture: ComponentFixture<VisitoritemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitoritemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitoritemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
