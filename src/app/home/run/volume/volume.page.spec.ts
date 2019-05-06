import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumePage } from './volume.page';

describe('VolumePage', () => {
  let component: VolumePage;
  let fixture: ComponentFixture<VolumePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
