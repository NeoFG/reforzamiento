import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasesPromocionScreenComponent } from './bases-promocion-screen.component';

describe('BasesPromocionScreenComponent', () => {
  let component: BasesPromocionScreenComponent;
  let fixture: ComponentFixture<BasesPromocionScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasesPromocionScreenComponent]
    });
    fixture = TestBed.createComponent(BasesPromocionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
