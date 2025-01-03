import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  imports: [],
  template: `
    <li class="flex px-12 gap-12 border">
      <p class="flex-auto">ma todo</p>
      <input type="checkbox" />
    </li>
  `,
  styles: ``,
})
export class TodoComponent {}
