import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HCComponent } from './hc.component';

describe('HCComponent', () => {
  let component: HCComponent;
  let fixture: ComponentFixture<HCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
