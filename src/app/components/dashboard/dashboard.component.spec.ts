import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  NO_ERRORS_SCHEMA } from '@angular/core';

import { DashboardSmartComponent } from './dashboard.component';

describe('DashboardSmartComponent', () => {
  let component: DashboardSmartComponent;
  let fixture: ComponentFixture<DashboardSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSmartComponent ],
      schemas:      [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should be created', () => {
    expect(component).toBeTruthy();
  });*/
});
