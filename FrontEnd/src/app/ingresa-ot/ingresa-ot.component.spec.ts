import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresaOTComponent } from './ingresa-ot.component';

describe('IngresaOTComponent', () => {
  let component: IngresaOTComponent;
  let fixture: ComponentFixture<IngresaOTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngresaOTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresaOTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
