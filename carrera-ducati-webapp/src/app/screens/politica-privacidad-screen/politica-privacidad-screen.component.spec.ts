import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaPrivacidadScreenComponent } from './politica-privacidad-screen.component';

describe('PoliticaPrivacidadScreenComponent', () => {
  let component: PoliticaPrivacidadScreenComponent;
  let fixture: ComponentFixture<PoliticaPrivacidadScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliticaPrivacidadScreenComponent]
    });
    fixture = TestBed.createComponent(PoliticaPrivacidadScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
