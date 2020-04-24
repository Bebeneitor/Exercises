// describe();
// it();

import { mensaje } from './string';

describe('pruebas de string', () => {
  it('Debe regresar un string', () => {
    const mensajeResp = mensaje('Fernando');
    expect(typeof mensajeResp).toBe('string');
  });

  it('Debe retornar un saludo con el nombre enviado', () => {
    const nombre = 'juan';
    const resp = mensaje(nombre);

    expect(resp).toContain(nombre);
  });
});
