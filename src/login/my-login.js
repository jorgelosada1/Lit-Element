import { LitElement, html } from 'lit-element';
import stylesCss from "./loginStyle.js";

export class MyElement extends LitElement {
  static get properties() {
    return {
      email: { type: String },
      password: { type: String },
    };
  }

  constructor() {
    super();
    this.email = '';
    this.password = '';
  }

  static get styles() {
    return [stylesCss];
  }

  handleInputChange(event) {
    const field = event.target.name;
    this[field] = event.target.value;
  }

  handleSubmit() {
    if (!this.validateEmail(this.email)) {
      alert('Correo electrónico no válido');
    } else if (this.password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
    } else {
      alert('Inicio de sesión exitoso');
    }
  }

  validateEmail(email) {
    // Usar una expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  render() {
    return html`
      <div class="form-box">
        <form class="form" @submit="${this.handleSubmit}">
          <span class="title">Login</span>
          <div class="form-container">
            <input
              type="email"
              class="input"
              name="email"
              .value="${this.email}"
              @input="${this.handleInputChange}"
              placeholder="Email"
              required
            >
            <input
              type="password"
              class="input"
              name="password"
              .value="${this.password}"
              @input="${this.handleInputChange}"
              placeholder="Password"
              required
            >
          </div>
          <button type="submit">Login</button>
        </form>
        <div class="form-section">
          <p>You don't have an account? <a href="">Register</a> </p>
        </div>
      </div>
    `;
  }
}

customElements.define('my-login', MyElement);
