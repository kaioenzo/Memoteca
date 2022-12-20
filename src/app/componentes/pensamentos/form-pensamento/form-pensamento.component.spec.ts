import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPensamentoComponent } from './form-pensamento.component';

describe('FormPensamentoComponent', () => {
  let component: FormPensamentoComponent;
  let fixture: ComponentFixture<FormPensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPensamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
