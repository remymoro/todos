import { Component } from '@angular/core';
import { TodoComponent } from './todo.component';

@Component({
  selector: 'app-todos-list',
  imports: [TodoComponent],
  template: `
    <ul class="flex flex-col gap-12">
      <app-todo />
      <app-todo />
      <app-todo />
      <app-todo />
    </ul>
  `,
  styles: `
    ul {
      margin-top: 12px;
    }
  `,
})
export class TodosListComponent {}
