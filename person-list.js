import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "@polymer/polymer/lib/elements/dom-repeat.js";
import "./person-item.js";

/**
 * `person-list`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PersonList extends PolymerElement {
  constructor() {
    super();
    this.addEventListener("choosePerson", ({ detail }) => {
      console.log(detail);
    });
  }
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        ul {
          list-style: none;
        }
        li {
          margin-bottom: 10px;
        }
      </style>
      <h2>Hi, I'm the person list component</h2>
      <button on-click="getPeople">Click here to get List of People</button>

      <ul>
        <dom-repeat items="[[persons]]">
          <template>
            <li><person-item person="[[item]]"></person-item></li>
          </template>
        </dom-repeat>
      </ul>
    `;
  }
  getPeople(evt) {
    evt.preventDefault();
    fetch("/data.json")
      .then(res => res.json())
      .then(({ results }) => {
        this.persons = results;
      });
  }
  static get properties() {
    return {
      persons: {
        type: Array
      }
    };
  }
}

window.customElements.define("person-list", PersonList);
