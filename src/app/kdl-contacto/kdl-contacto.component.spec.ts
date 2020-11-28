import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KdlContactoComponent } from './kdl-contacto.component';

describe('KdlContactoComponent', () => {
  let component: KdlContactoComponent;
  let fixture: ComponentFixture<KdlContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KdlContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KdlContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
