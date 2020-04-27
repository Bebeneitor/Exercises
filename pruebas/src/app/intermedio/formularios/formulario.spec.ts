import { FormularioRegister } from './formulario';
import { FormBuilder } from '@angular/forms';
describe('Formularios', () => {
  let componente: FormularioRegister;
  beforeEach(() => {
    componente = new FormularioRegister(new FormBuilder());
  });
  it('Debe de crear un formulario con 2 campos, email y password', () => {
    expect(componente.form.contains('email')).toBeTruthy();
    expect(componente.form.contains('password')).toBeTruthy();
  });

  it('Email debe ser obligatorio', () => {
    const control = componente.form.get('email');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('Email debe ser valido', () => {
    const control = componente.form.get('email');
    control.setValue('emailno@123.com');
    expect(control.valid).toBeTruthy();
  });
});
