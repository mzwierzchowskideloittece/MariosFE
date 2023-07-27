import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToSentAndReceivedMariosComponent } from './button-to-sent-and-received-marios.component';

describe('ButtonToSentAndReceivedMariosComponent', () => {
  let component: ButtonToSentAndReceivedMariosComponent;
  let fixture: ComponentFixture<ButtonToSentAndReceivedMariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonToSentAndReceivedMariosComponent]
    });
    fixture = TestBed.createComponent(ButtonToSentAndReceivedMariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
