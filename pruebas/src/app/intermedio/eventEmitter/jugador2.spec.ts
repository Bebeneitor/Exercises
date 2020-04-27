import { Jugador2 } from './jugador2';

describe('Jugador 2 emit', () => {
  let jugador: Jugador2;

  beforeEach(() => {
    jugador = new Jugador2();
  });

  it('debe emitir un evento cuando recibe danio', () => {
    let nuevoHp = 0;
    jugador.hpCambia.subscribe((hp) => {
      nuevoHp = hp;
    });

    jugador.recibeDanio(1000);

    expect(nuevoHp).toBe(0);
  });

  it('debe emitir un evento cuando recibe danio y sobrevivir si es menos de 1000', () => {
    let nuevoHp = 0;
    jugador.hpCambia.subscribe((hp) => {
      nuevoHp = hp;
    });

    jugador.recibeDanio(50);

    expect(nuevoHp).toBe(50);
  });
});
