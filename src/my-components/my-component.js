import { LitElement, html } from 'lit-element';
import stylesCss from "./my-componentStyle.js";

export class MyElement extends LitElement {

  constructor(){
    super()
    this.saludo = "saludo",
    this.componentesHtml="";
    this.paramcomponentes="";
  }

  static get properties(){
    return {
      saludo: {type:String},
      componentesHtml: {type:String},
      paramcomponentes: {type:String},
    }
  }
static get scopedElements(){
  return{
    "my-login": MyElement,
    "my-register": MyElement,
  }
}
  static get styles(){
    return [stylesCss]
  }

  render() {
    return html`
      <p class="btn">Soy My Element</p>
    `
  }

  renderAll(){
    if(this.paramcomponentes){
      this.componentesHtml= html `<my-login></my-login>`
    }else{
      this.componentesHtml= html `<my-register></my-register>`
    }
  }
  mostrarComponent(){
    this.paramcomponentes =2;
    this.renderAll;
  }

  mostrarLogin(){
      return html `<my-login></my-login>`
  }

  render(){
    this.paramcomponentes=1;
    return html `
    ${this.componentesHtml}
    ${this.renderAll()}
    <button @click="${(e) => this.mostrarComponent()}">Registrarse</button>
    `;
  }
}

customElements.define('my-element', MyElement);