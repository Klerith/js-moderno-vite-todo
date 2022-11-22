import { Todo } from '../models/todo.model';


/**
 * 
 * @param {Todo} todo 
 */
export const createTodoHTML = ( todo ) => {
    if ( !todo ) throw new Error('A TODO object is required');

    const html = `
        <div class="view">
            <input class="toggle" type="checkbox" ${ todo.done ? 'checked': '' }>
            <label>Probar JavaScript</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    `;

    const liElement = document.createElement('li');
    liElement.innerHTML = html;
    liElement.setAttribute('data-id', todo.id);

    if ( todo.done )
        liElement.classList.add('completed');
    

    return liElement;
}