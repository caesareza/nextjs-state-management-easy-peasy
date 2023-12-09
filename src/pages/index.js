import ToDoItem from "./components/ToDoItem";

import { useStoreActions } from "easy-peasy";

export default function Home() {
  const setToDo = useStoreActions((action) => action.todo.setToDo)

  function onSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    const { name } = formJson

    form.reset()
    setToDo(name)
  }

  return (
    <div className="my-5">
      <form onSubmit={onSubmit}>
        <label
          htmlFor="name"
          className="block text-5xl font-medium text-gray-700"
        >
          {" "}
          Todo{" "}
        </label>

        <input
          type="name"
          id="name"
          placeholder="name .."
          className="rounded-md border border-stone-500 mt-2 p-5 w-full"
          name="name"
        />
      </form>

      <ToDoItem />
    </div>
  );
}
