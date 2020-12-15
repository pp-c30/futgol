import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiDetalleImagenComponent } from './admi-detalle-imagen.component';

describe('AdmiDetalleImagenComponent', () => {
  let component: AdmiDetalleImagenComponent;
  let fixture: ComponentFixture<AdmiDetalleImagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmiDetalleImagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmiDetalleImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
