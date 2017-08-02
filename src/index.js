import _ from 'lodash';
import './colors.css';
import './master.css';
import './typography.css';
import 'https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css';
import 'https://fonts.googleapis.com/css?family=Cabin:400,400i,700" rel="stylesheet';
import Logo from './cantina-logo.png';

function component() {
  var logo = get.elementId('logo');
  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = Logo;

  return logo;
}

document.body.appendChild(component());
