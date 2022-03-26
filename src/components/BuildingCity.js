class BuildingCity extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */ `
       :host {
        --building-width:20%;

        display:grid;
        grid-template-columns:repeat(2, 15px);
        grid-template-rows:repeat(auto-fill,15px);
        justify-content:center;
        padding-top:29px;
        gap:15px;
        width:var(--building-width) ;
        background:var(--building-color,#444);
        height:100%;
     }

     :host(.night){
       --window-color:gold;
     }
     :host(.day){
       --window-color:cyan;
     }
     .container{
       width:var(--building-width);
       height:var(--building-height);
       background:#444 ;

     }
   `;
  }

  connectedCallback() {
    this.render();
  }

  generateWindows() {
    const windows = " ";
    for (let i = 0; i < 20; i++) {

    }
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
   <style>${BuildingCity.styles}</style>
   <div class="container">

   </div>`;
  }
}

customElements.define("building-city", BuildingCity);
