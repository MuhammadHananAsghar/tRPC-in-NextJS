import { serverClient } from './_trpc/serverClient'
import TodoList from './_components/TodoList'

export default async function Home() {
  const todos = await serverClient.getTodos();

  return (
    <main className='overflow-hidden'>
      <TodoList initialTodos={todos} />
    </main>
  )
}
