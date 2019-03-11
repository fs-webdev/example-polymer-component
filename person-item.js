import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";

/**
 * `person-list`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PersonItem extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: flex;
          align-items: center;
        }
        img {
          width: 100%;
          height: 100%;
        }
        .name {
          font-weight: bold;
        }
        .img-wrapper {
          margin-right: 10px;
          overflow: hidden;
          border-radius: 50%;
          width: 50px;
          height: 50px;
        }
      </style>
      <div class="img-wrapper">
        <img
          src="[[person.picture.thumbnail]]"
          alt="[[person.name.first]] [[person.name.last]]"
        />
      </div>
      <div>
        <p class="name">
          [[capitalizeName(person.name.first)]]
          [[capitalizeName(person.name.last)]]
        </p>
        <p>[[person.email]]</p>
        <button on-click="choosePerson">Choose Person</button>
      </div>
    `;
  }
  choosePerson(e){
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('choosePerson', {bubbles:true, composed:true, detail: this.person}))
  }
  capitalizeName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  static get properties() {
    return {
      person: {
        type: Object
      }
    };
  }
}

window.customElements.define("person-item", PersonItem);
