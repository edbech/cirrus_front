import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnToPlayComponent } from './learn-to-play.component';

describe('LearnToPlayComponent', () => {
  let component: LearnToPlayComponent;
  let fixture: ComponentFixture<LearnToPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnToPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnToPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
