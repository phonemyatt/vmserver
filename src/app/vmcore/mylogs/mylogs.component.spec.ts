import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MylogsComponent } from './mylogs.component';

describe('MylogsComponent', () => {
  let component: MylogsComponent;
  let fixture: ComponentFixture<MylogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MylogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MylogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
