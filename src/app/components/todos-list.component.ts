import { Component, effect, input, output } from '@angular/core';
import { TodoComponent } from './todo.component';
import { Todo } from '../shared/interface/todo.interface';

@Component({
  selector: 'app-todos-list',
  imports: [TodoComponent],
  template: `
    <ul class="flex flex-col gap-12">
      @for(todo of todosList(); track todo.id ) {
      <app-todo (toggleTodo)="toggleTodo.emit($event)" [todo]="todo" />
      } @empty {
      <li>Il n'y a pas de todo pour l'instant</li>
      }
    </ul>
  `,
  styles: `ul { margin-top: 12px }`,
})
export class TodosListComponent {
  toggleTodo = output<string>();
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
