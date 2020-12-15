import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiImagenComponent } from './admi-imagen.component';

describe('AdmiImagenComponent', () => {
  let component: AdmiImagenComponent;
  let fixture: ComponentFixture<AdmiImagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmiImagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmiImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
