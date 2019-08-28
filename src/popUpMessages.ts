import { Display } from './Display';

//Para mostrar un mensaje emergente de error
const viewPort = document.querySelector('body');

export function showErrorMessage(err: string): void {
  const errorMessage = document.createElement('div');
  errorMessage.setAttribute(
    'class',
    'fixed alert alert-dismissible alert-danger fadeInUp animated'
  );

  errorMessage.innerHTML = `
  <strong>lo lamentamos, hubo un error:</strong> ${err}.
  `;

  viewPort.appendChild(errorMessage);
  setTimeout(() => {
    errorMessage.setAttribute(
      'class',
      'fixed alert alert-dismissible alert-danger fadeOutDown animated'
    );
    setTimeout(() => {
      viewPort.removeChild(errorMessage);
    }, 1000);
  }, 4000);
  console.log('Lo lamentamos, hubo un error:', err);
}

//Muestra un mensaje de advertencia
export function showWarning(target: EventTarget): boolean | void {
  let warning = document.createElement('div');
  warning.setAttribute(
    'class',
    'alert alert-dismissible alert-warning fixed--middle rotateIn animated'
  );

  warning.innerHTML = `
   <button type="button" class="close" data-dismiss="alert">&times;</button>
  <h4 class="alert-heading text-danger alert-link">Advertencia!</h4>
  <p class="mb-0">Procura estar conciente de que una vez que lo borre, no lo podras recuperar,
  ¿Esta aún seguro de querer hacerlo?</p>
  <div class="text-center">
  <button type="button" class="btn btn-success">Mejor no</button>
  <button type="button" class="btn btn-danger">Siempre he estado seguro</button>
  </div>
  `;

  viewPort.appendChild(warning);

  warning.addEventListener('click', (e: any) => {
    switch (e.target.innerText) {
      case 'Mejor no':
        close('success');
        break;
      case '×':
        close('warning');
        break;
      case 'Siempre he estado seguro':
        Display.removeField(target);
        close('danger');
        break;
    }
  });

  function close(depends: string) {
    warning.setAttribute(
      'class',
      `fixed alert alert-dismissible alert-${depends} fixed--middle rotateOut animated`
    );
    setTimeout(() => {
      viewPort.removeChild(warning);
    }, 1000);
  }
}
