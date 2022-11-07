import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFinalTableComponent } from './ngx-final-table.component';

describe('NgxFinalTableComponent', () => {
  let component: NgxFinalTableComponent;
  let fixture: ComponentFixture<NgxFinalTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFinalTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxFinalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
