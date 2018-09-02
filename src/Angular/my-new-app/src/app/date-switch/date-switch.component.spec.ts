import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSwitchComponent } from './date-switch.component';

describe('DateSwitchComponent', () => {
  let component: DateSwitchComponent;
  let fixture: ComponentFixture<DateSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
