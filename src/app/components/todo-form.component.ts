import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  template: `
    <input type="text" class="flex-auto border" placeholder="Entrez une todo" />
    <button class="btn btn-primary">Ajouter</button>
  `,
  styles: `
    :host {
      display:flex;
      gap:12px;
    }
  `,
})
export class TodoFormComponent {}
