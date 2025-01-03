import { Component, signal } from '@angular/core';
import { TodoFormComponent } from './todo-form.component';
import { TodosListComponent } from './todos-list.component';

@Component({
  selector: 'app-todo-container',
  imports: [TodoFormComponent, TodosListComponent],
  template: `
    <app-todo-form />
    <app-todos-list />
  `,
  styles: `
    :host { padding: 32px; }
  `,
})
export class TodoContainerComponent {}
