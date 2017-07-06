import 'bootstrap/dist/css/bootstrap.css';
import './buttons.css';
import buttonsHTML from './buttons.html';

function Buttons() {
  const element = document.createElement('div');
  element.innerHTML = `${buttonsHTML}`;
  return element;
}

document.body.appendChild(Buttons());
