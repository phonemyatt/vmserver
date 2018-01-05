import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysecuritiesComponent } from './mysecurities.component';

describe('MysecuritiesComponent', () => {
  let component: MysecuritiesComponent;
  let fixture: ComponentFixture<MysecuritiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysecuritiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysecuritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
