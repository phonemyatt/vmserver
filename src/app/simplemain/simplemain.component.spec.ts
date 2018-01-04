import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplemainComponent } from './simplemain.component';

describe('SimplemainComponent', () => {
  let component: SimplemainComponent;
  let fixture: ComponentFixture<SimplemainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplemainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
