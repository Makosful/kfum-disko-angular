import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrangementActivateComponent } from './arrangement-activate.component';

describe('ArrangementActivateComponent', () => {
  let component: ArrangementActivateComponent;
  let fixture: ComponentFixture<ArrangementActivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrangementActivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrangementActivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
