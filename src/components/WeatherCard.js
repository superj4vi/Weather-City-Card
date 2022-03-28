import "./WeatherCity";
class WeatherCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */ `
       :host {
        --width:359px;
        --height:556px;
     }
     .container{
       width:var(--width);
       height:var(--height);
       background:#fff;
       box-shadow:0 0 25px 5px #0006;
      position:relative;

      }

   `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
   <style>${WeatherCard.styles}</style>
   <div class="container">
   <weather-city class="day"></weather-city>
    <div class="zone"></div>

   </div>`;
  }
}

customElements.define("weather-card", WeatherCard);
