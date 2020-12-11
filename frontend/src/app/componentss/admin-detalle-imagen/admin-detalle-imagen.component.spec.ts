import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetalleImagenComponent } from './admin-detalle-imagen.component';

describe('AdminDetalleImagenComponent', () => {
  let component: AdminDetalleImagenComponent;
  let fixture: ComponentFixture<AdminDetalleImagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDetalleImagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDetalleImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
