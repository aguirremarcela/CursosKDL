import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KdlCursosComponent } from './kdl-cursos.component';

describe('KdlCursosComponent', () => {
  let component: KdlCursosComponent;
  let fixture: ComponentFixture<KdlCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KdlCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KdlCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
