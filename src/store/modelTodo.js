import { action, computed } from "easy-peasy";

const modelTodo = {
    todo: [],
    setToDo: action((state, payload) => {
        state.todo.push(payload)
    }),
    deleteTodo: action((state, payload) => {
        const dataFiltered = state.todo.filter((data) => data !== payload)
        state.todo = dataFiltered
    }),
    todoCount: computed((state) => state.todo.length),
}

export default modelTodo