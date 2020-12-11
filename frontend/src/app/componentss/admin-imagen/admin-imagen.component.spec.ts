import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminImagenComponent } from './admin-imagen.component';

describe('AdminImagenComponent', () => {
  let component: AdminImagenComponent;
  let fixture: ComponentFixture<AdminImagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminImagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
