import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycompanyprofileComponent } from './mycompanyprofile.component';

describe('MycompanyprofileComponent', () => {
  let component: MycompanyprofileComponent;
  let fixture: ComponentFixture<MycompanyprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycompanyprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycompanyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
