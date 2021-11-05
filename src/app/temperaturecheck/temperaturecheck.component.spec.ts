import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturecheckComponent } from './temperaturecheck.component';

describe('TemperaturecheckComponent', () => {
  let component: TemperaturecheckComponent;
  let fixture: ComponentFixture<TemperaturecheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperaturecheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperaturecheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
