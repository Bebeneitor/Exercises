import { obtenerRobos } from './arreglos';

describe('Prueba de arreglos', () => {
  it('debe retornar almenos 3 robost', () => {
    const rest = obtenerRobos();

    expect(rest.length).toBeGreaterThanOrEqual(3);
  });

  it('debe existir megaman o ultron', () => {
    const rest = obtenerRobos();

    expect(rest).toContain('Megaman');
    expect(rest).toContain('Ultron');
  });
});
