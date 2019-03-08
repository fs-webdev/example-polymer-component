import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `person-list`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PersonList extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'person-list',
      },
    };
  }
}

window.customElements.define('person-list', PersonList);
