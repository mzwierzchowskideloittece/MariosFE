import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMariosComponent } from './display-marios.component';

describe('DisplayMariosComponent', () => {
  let component: DisplayMariosComponent;
  let fixture: ComponentFixture<DisplayMariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayMariosComponent]
    });
    fixture = TestBed.createComponent(DisplayMariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
