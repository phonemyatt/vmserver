import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HosteditComponent } from './hostedit.component';

describe('HosteditComponent', () => {
  let component: HosteditComponent;
  let fixture: ComponentFixture<HosteditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HosteditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HosteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
