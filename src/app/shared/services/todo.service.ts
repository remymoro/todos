import { Injectable } from '@angular/core';
import { TodoForm } from '../interface/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  BASE_URL = 'https://restapi.fr/api/atodos';

  async addTodo(todo: TodoForm): Promise<void> {
    try {
      const response = await fetch(this.BASE_URL, {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
          'Content-type': 'application/json',
        },
      });
      const body = await response.json();
      if (response.ok) {
        console.log('Tâche ajoutée :', body);
      } else {
        throw new Error('Erreur lors de l’ajout de la tâche');
      }
    } catch (e) {
      console.error('Erreur réseau :', e);
    }
  }
}
