import 'bootstrap/dist/css/bootstrap.css';
import './buttons.css';

document.body.appendChild(component());

function component() {
  var element = document.createElement('div');

  element.innerHTML = `
    ${require('./buttons.html')}
  `;

  return element;
}
