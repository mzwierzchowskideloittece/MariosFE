import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMariosSiteComponent } from './add-marios-site.component';

describe('AddMariosSiteComponent', () => {
  let component: AddMariosSiteComponent;
  let fixture: ComponentFixture<AddMariosSiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMariosSiteComponent]
    });
    fixture = TestBed.createComponent(AddMariosSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
