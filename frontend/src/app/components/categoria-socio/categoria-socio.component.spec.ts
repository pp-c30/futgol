import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaSocioComponent } from './categoria-socio.component';

describe('CategoriaSocioComponent', () => {
  let component: CategoriaSocioComponent;
  let fixture: ComponentFixture<CategoriaSocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaSocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
