import { Component, signal } from '@angular/core';
import { TodoFormComponent } from './todo-form.component';
import { TodosListComponent } from './todos-list.component';
import { Todo } from '../shared/interface/todo.interface';

@Component({
  selector: 'app-todo-container',
  imports: [TodoFormComponent, TodosListComponent],
  template: `
    <app-todo-form (addTodo)="addTodo($event)" />
    <app-todos-list
      (toggleTodo)="toggleTodo($event)"
      [todosList]="todosList()"
    />
  `,
  styles: `
    :host { padding: 32px; }
  `,
})
export class TodoContainerComponent {
  todosList = signal<Todo[]>([
    {
      id: 'd2f2f9db-2ac8-45ac-a094-1f3064483abc',
      name: 'Task 48',
      done: false,
    },
    {
      id: '43dbf7fd-1cf7-4f79-ae0d-ea920c76c22c',
      name: 'Task 48',
      done: false,
    },
    { id: '4bebfb75-18ad-4c59-9f95-9e1e05ce26ad', name: 'Task 34', done: true },
    { id: '721c9605-724f-4a69-b914-6cd5b2431757', name: 'Task 33', done: true },
    {
      id: '1a2a9b29-3319-4aab-a6b8-8cd52bac61b0',
      name: 'Task 30',
      done: false,
    },
    {
      id: 'bec4991b-ee8b-487b-b567-c6158d9da3b6',
      name: 'Task 61',
      done: false,
    },
    { id: 'f025c86c-5b31-4940-8d38-c1007745e9c1', name: 'Task 8', done: true },
    { id: '5e70a826-3841-4782-9cca-c3bd4b9f82c9', name: 'Task 53', done: true },
    { id: '7dc04e91-ea83-48dd-8d8e-65d6a110f922', name: 'Task 2', done: true },
    {
      id: '82883a9f-22c2-41e4-895c-003425db7300',
      name: 'Task 65',
      done: false,
    },
  ]);

  addTodo(todo: Todo) {
    this.todosList.update((todos) => [...todos, todo]);
  }

  toggleTodo(todoId: string) {
    this.todosList.update((todos) => {
      return todos.map((todo) => {
        // Retour explicite du tableau modifié
        if (todoId === todo.id) {
          // Mise à jour de la tâche correspondant à todoId
          return {
            ...todo, // Copie de l'objet original
            done: !todo.done, // Inverse la propriété 'done'
          };
        }
        // Si l'ID ne correspond pas, retourne l'élément inchangé
        return todo;
      });
    });
  }
}
