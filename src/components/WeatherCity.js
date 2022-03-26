import "./BuildingCity";
const BUILDING_NUMBER = 6;

class WeatherCity extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */ `
       :host {
     }
      .container{
       width:100%;
       height:75%;
       background:#0f0c20;
      }
   `;
  }

  connectedCallback() {
    this.render();
  }

  generateBuilding() {
    return "<building-city></building-city>".repeat(BUILDING_NUMBER);
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
   <style>${WeatherCity.styles}</style>
   <div class="container">
   <div class="building">
     ${this.generateBuilding()}
   </div>

   </div>`;
  }
}

customElements.define("weather-city", WeatherCity);
