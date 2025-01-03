import { Component, effect, input } from '@angular/core';
import { TodoComponent } from './todo.component';
import { Todo } from '../shared/interface/todo.interface';

@Component({
  selector: 'app-todos-list',
  imports: [TodoComponent],

  template: `
    <ul class="flex flex-col gap-12">
      @for (todo of this.todosList(); track todo.id) {
      <app-todo [todo]="todo" />
      }@empty {
      <h1>pas de todo pour le moment</h1>
      }
    </ul>
  `,
  styles: `
    ul {
      margin-top: 12px;
    }
  `,
})
export class TodosListComponent {
  // option dans le but de renommé
  // myTodos = input<Todo[]>([], { alias: 'todosList' });
  todosList = input([], {
    transform: (todosList: Todo[]) => {
      return todosList.map((t) => ({ ...t, new: true }));
    },
  });

  constructor() {
    effect(() => {
      console.log(this.todosList());
    });
  }
}
