class CustomButton extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      
      const button = document.createElement('button');
      button.textContent = this.getAttribute('text') || 'Clique';
      button.style.backgroundColor = this.getAttribute('color') || 'red';
      button.style.color = this.getAttribute('text-color') || 'white';
      button.style.padding = this.getAttribute('padding') || '10px 20px';
      button.style.fontSize = this.getAttribute('font-size') || '16px';
      button.style.borderRadius = this.getAttribute('border-radius') || '5px';
      button.style.border = this.getAttribute('border') || 'none';
      button.style.transition = this.getAttribute('transition') || 'background-color 0.3s ease';
      
      button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = this.getAttribute('hover-color') || button.style.backgroundColor;
      });
      
      button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = this.getAttribute('color') || button.style.backgroundColor;
      });
      
      button.addEventListener('click', () => {
        this.dispatchEvent(new Event('click'));
      });
      
      shadow.appendChild(button);
    }
}
customElements.define('custom-button', CustomButton);

class ThemeToggle extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <button class="theme-button">Alterar Tema</button>
    `;
    this.querySelector('.theme-button').addEventListener('click', () => this.toggleTheme());
  }

  toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
  }
}

customElements.define('theme-toggle', ThemeToggle);

