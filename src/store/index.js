import { createStore, persist } from "easy-peasy";
import modelTodo from "./modelTodo";
import modelUser from "./modelUser";

const store = createStore({
    todo: persist(modelTodo, {
        storage: 'localStorage'
    }),
    user: modelUser
})

export default store