import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundvfxPage } from './soundvfx.page';

describe('SoundvfxPage', () => {
  let component: SoundvfxPage;
  let fixture: ComponentFixture<SoundvfxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundvfxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundvfxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
