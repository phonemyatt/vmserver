import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplereviewComponent } from './simplereview.component';

describe('SimplereviewComponent', () => {
  let component: SimplereviewComponent;
  let fixture: ComponentFixture<SimplereviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplereviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplereviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
