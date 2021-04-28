import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallscreenComponent } from './getallscreen.component';

describe('GetallscreenComponent', () => {
  let component: GetallscreenComponent;
  let fixture: ComponentFixture<GetallscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});