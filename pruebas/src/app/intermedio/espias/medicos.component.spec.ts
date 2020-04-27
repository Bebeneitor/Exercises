import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, empty, throwError } from 'rxjs';
import { compileComponentFromMetadata } from '@angular/compiler';

describe('MedicosComponent', () => {
  let componente: MedicosComponent;
  const servicio = new MedicosService(null);

  beforeEach(() => {
    componente = new MedicosComponent(servicio);
  });

  it('Debe cargar los medicos', () => {
    const medicos = ['medico1', 'medico2', 'medico3'];
    spyOn(servicio, 'getMedicos').and.callFake(() => {
      return from([medicos]);
    });

    componente.ngOnInit();

    expect(componente.medicos.length).toBeGreaterThan(0);
  });

  it('Debe de llamar al servidor para agregar un medico', () => {
    const espia = spyOn(servicio, 'agregarMedico').and.callFake((medico) => {
      return empty();
    });
    componente.agregarMedico();
    expect(espia).toHaveBeenCalled();
  });

  it('Debe de agregar un nuevo medico al arreglo', () => {
    const medico = { id: 1, nombre: 'juan' };
    spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));
    componente.agregarMedico();
    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
  });

  it('Si falla la adicion, la propiedad mensajeError debe ser igual al error del servicio', () => {
    const msgError = 'No se pudo agregar el error';
    spyOn(servicio, 'agregarMedico').and.returnValue(throwError(msgError));

    componente.agregarMedico();
    expect(componente.mensajeError).toBe(msgError);
  });

  it('Debe de llamar al servidor para borrar el medico', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(empty());

    componente.borrarMedico('1');
    expect(espia).toHaveBeenCalledWith('1');
  });

  it('No debe de llamar al servidor para borrar el medico', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(empty());

    componente.borrarMedico('1');
    expect(espia).not.toHaveBeenCalledWith('1');
  });
});
