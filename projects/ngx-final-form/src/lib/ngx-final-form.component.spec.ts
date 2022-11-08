import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFinalFormComponent } from './ngx-final-form.component';

describe('NgxFinalFormComponent', () => {
  let component: NgxFinalFormComponent;
  let fixture: ComponentFixture<NgxFinalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFinalFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxFinalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
