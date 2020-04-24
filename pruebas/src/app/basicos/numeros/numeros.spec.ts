import { incrementar } from './numeros';

describe('pruenas de numeros', () => {
  it('debe retornar 100 si el numero ingresado es mayor a 100', () => {
    const res = incrementar(300);

    expect(res).toBe(100);
  });

  it('debe retornar el numero ingresado mas 1 sino es mayor a 100', () => {
    const res = incrementar(50);

    expect(res).toBe(51);
  });
});
