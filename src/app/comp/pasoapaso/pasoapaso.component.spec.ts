import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasoapasoComponent } from './pasoapaso.component';

describe('PasoapasoComponent', () => {
  let component: PasoapasoComponent;
  let fixture: ComponentFixture<PasoapasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasoapasoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasoapasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
