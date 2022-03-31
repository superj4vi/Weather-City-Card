class BuildingWindows extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */ `
       :host {
         background:var(--window-turnoff-color);
         transition:
          background 0.5s,
          box-shadow 1s;
     }
     :host(.on){
       background:var(--window-color);
       box-shadow:0 0 10px var(--shine-color);
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

  turnoff() {
    this.classList.remove("off");
  }

  toggle() {
    this.classList.toggle("on");
    this.setEvent();
  }

  setEvent() {
    const ocurred = ~~(Math.random() * 35);
    if (ocurred !== 0) return;

    const time = 2000 + ~~(Math.random() * 1000);
    setTimeout(() => this.toggle(), time);
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
   <style>${BuildingWindows.styles}</style>
    `;
  }
}

customElements.define("building-windows", BuildingWindows);
