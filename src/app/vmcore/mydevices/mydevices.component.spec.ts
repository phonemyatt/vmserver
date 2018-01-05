import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydevicesComponent } from './mydevices.component';

describe('MydevicesComponent', () => {
  let component: MydevicesComponent;
  let fixture: ComponentFixture<MydevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
