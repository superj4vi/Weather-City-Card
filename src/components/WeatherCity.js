import "./BuildingCity";
import "./RainCity";
import "./CloudCity";

const BUILDING_NUMBER = 6;
const TIME_TO_CHANGE_STAGE = 10000;
const CLOUDS_NUMBERS = 10;

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

       display:flex;
       flex-direction:column;
       justify-content:flex-end;

       transition: background 1.5s;
       position:relative;
       overflow:hidden;
      }

      :host(.night) .container{
        background: #0f0c20;
      }

      :host(.day) .container{
        background:#1588b6;
      }

      :host(.night){
        --window-turnoff-color:#000;
        --window-color:#d3a50f;
        --shine-color:gold;
      }
      :host(.day){
        --window-turnoff-color: #1c1d1dff;
        --window-color: #d3a50f22;
        --shine-color: transparent;
      }


      .sun,
      .moon{
        width:var(--size) ;
        height:var(--size);
        border-radius:50%;
        position:absolute;
        top:30px;
        transition:transform 6s ease-in-out;
        z-index:2;
      }
      .sun{
        --size:80px;
        background:#e0a911 ;
        box-shadow:0 0 25px 12px #e7af16;
        left:30px;
      }

      .moon{
        --size:50px;
        background: #fff;
        box-shadow: 0 0 10px #fff;
        right: 30px;
        background-image:
          radial-gradient(circle 25px at 25% 25%, #eee 0 25%, transparent 28%),
          radial-gradient(circle 30px at 75% 75%, #eee 0 30%, transparent 32%),
          radial-gradient(circle 15px at 45% 75%, #eaeaea 0 30%, transparent 32%)
      }
      :host(.night).moon,
      :host(.day).sun{
        transform:translate(0,0);
      }

      :host(.day) .moon,
      :host(.night) .sun{
        transform:translate(0, 500px) ;
      }

      .cloud{
        width:100% ;
        height:250px;
        position:absolute;
        top:0;
        z-index:5;
      }

      .building{
        width:100%;
        height:75%;

        display:flex ;
        align-items:flex-end;

        position:relative;
        z-index:10;

      }

   `;
  }

  connectedCallback() {
    this.render();
    setInterval(() => this.changeState(), TIME_TO_CHANGE_STAGE);
  }

  generateBuilding() {
    return "<building-city></building-city>".repeat(BUILDING_NUMBER);
  }

  generateClouds() {
    return "<cloud-city></cloud-city>".repeat(CLOUDS_NUMBERS);
  }

  changeState() {
    this.classList.toggle("night");
    this.classList.toggle("day");
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
   <style>${WeatherCity.styles}</style>
   <div class="container">
   <rain-city></rain-city>
   <div class="sun"></div>
   <div class="moon"></div>

   <div class="clouds">
   ${this.generateClouds()}
   </div>

   <div class="building">
     ${this.generateBuilding()}
   </div>
</div>`;
  }
}

customElements.define("weather-city", WeatherCity);
