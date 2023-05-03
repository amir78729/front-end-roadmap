const switchElement = document.getElementById('switch');
const circleElement = document.getElementById('circle');
const containerElement = document.getElementById('container');
const labelElement = document.getElementById('label');
const sunElement = document.getElementById('sun');
const moonElement = document.getElementById('moon');

let switchValue = true;
labelElement.innerText = 'ON';

const switchOnClick = () => {
    switchValue = !switchValue;
    containerElement.className = switchValue ? 'on' : 'off';
    sunElement.className = switchValue ? 'on' : 'off';
    moonElement.className = switchValue ? 'on' : 'off';
    labelElement.innerText = switchValue ? 'ON' : 'OFF';
}