class BuildingWindows extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */ `
       :host {
         background:#000;
         transition:background 0.5s;
     }
     :host(.on){
       background:gold;
       box-shadow:;
         }

   `;
  }

  connectedCallback() {
    this.render();
    this.setEvent();
  }

  turnOn() {
    this.classList.add("on");
  }

  turnff() {
    this.classList.add("off");
  }

  toggle() {
    this.classList.toggle("on");
    this.setEvent();
  }

  setEvent() {
    const ocurrs = Math.floor(Math.random() * 5);
    if (ocurrs !== 0) return;
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
   <style>${BuildingWindows.styles}</style>
    `;
  }
}

customElements.define("building-windows", BuildingWindows);
