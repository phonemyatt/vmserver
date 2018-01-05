import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhostsComponent } from './myhosts.component';

describe('MyhostsComponent', () => {
  let component: MyhostsComponent;
  let fixture: ComponentFixture<MyhostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyhostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyhostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
