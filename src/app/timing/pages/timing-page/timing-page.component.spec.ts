import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimingPageComponent } from './timing-page.component';

describe('TimingPageComponent', () => {
  let component: TimingPageComponent;
  let fixture: ComponentFixture<TimingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
