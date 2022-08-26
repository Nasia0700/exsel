import { ExselComponent } from '../../core/ExselComponent'

export class Formula extends ExselComponent {
  static className = 'excel__formula'

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click']
    })
  }

  toHTML() {
    return `
        <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
        `
  }

  onInput(event) {
    console.log('Formula: onInput', event.target.textContent.trim());
  }

  onClick(event) {
    console.log(event);
  }
}