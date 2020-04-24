import { Jugador } from './clase';
describe('Pruebas de clase', () => {
  const jugador = new Jugador();

  it('Debe retornar 80 de HP si recibe 20 de daño', () => {
    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(20);
    expect(resp).toBe(80);
  });

  it('Debe retornar 50 de HP si recibe 50 de daño', () => {
    // jugador = new Jugador();
    const resp = jugador.recibeDanio(50);
    expect(resp).toBe(50);
  });
});
