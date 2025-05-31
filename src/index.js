import './assets/styles.css';
import { createCalculator } from './components/Calculator.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  app.appendChild(createCalculator());
});
