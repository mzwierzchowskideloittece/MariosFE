import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpMariosComponent } from './pop-up-marios.component';

describe('PopUpMariosComponent', () => {
  let component: PopUpMariosComponent;
  let fixture: ComponentFixture<PopUpMariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpMariosComponent]
    });
    fixture = TestBed.createComponent(PopUpMariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
