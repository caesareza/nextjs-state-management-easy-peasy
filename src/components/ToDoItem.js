import { useStoreState, useStoreActions } from "easy-peasy";
import { useEffect, useState } from "react";

export default function ToDoItem() {
  const [isLoaded, setIsLoaded] = useState(false)

  const data = useStoreState((state) => state.todo.todo)
  const deleteTodo = useStoreActions((action) => action.todo.deleteTodo)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) return 'Loading Todo ...'

  return (
    <ul className="mt-5 space-y-3">
      {data?.map((value) => (
        <li className="flex items-center border border-stone-200 p-2">
          <div>{value}</div>
          <div className="ml-auto">
            <button
              className="bg-purple-500 p-2 text-white"
              onClick={() => deleteTodo(value)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
