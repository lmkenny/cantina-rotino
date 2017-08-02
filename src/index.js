import _ from 'lodash';
import './colors.css';
import './fonts.css'
import './master.css';
import './typography.css';


import Logo from './cantina-logo.png';

function component() {
  var cLogo = get.elementId('logo');
  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = cLogo;

  return cLogo;
}

document.body.appendChild(component());
