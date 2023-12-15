import Link from "next/link";

import { useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";

export default function Header() {
  const [isLoaded, setIsLoaded] = useState(false)
  const todoCount = useStoreState((state) => state.todo.todoCount)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link href="/">Todo</Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link href="/my-todo">
                    {isLoaded ? `MyTodo (${todoCount})` : 'Loading'}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
