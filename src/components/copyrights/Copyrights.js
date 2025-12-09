import './copyrights.css';

export default class Copyrights {
  // <address class="copyrights">
  //   <a class="copyrights__link" href="https://github.com/Ben4-front">© Ben4-front, 2025</a>
  // </address>
  constructor() {
    this.element = document.createElement('address');
    this.element.classList.add('copyrights');

    this.link = document.createElement('a');
    this.link.classList.add('copyrights__link');
    this.link.href = 'https://github.com/Ben4-front';
    this.link.textContent = '© Ben4-front, 2025';

    this.element.append(this.link);
  }

  checkRights() {
    if (this.element.textContent !== '© Ben4-front, 2025') {
      // eslint-disable-next-line no-console
      console.warn('This work has been stolen from https://github.com/Ben4-front/Organization-of-testing');
    }
  }
}
