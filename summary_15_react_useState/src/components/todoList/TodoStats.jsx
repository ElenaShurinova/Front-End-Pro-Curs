export default function TodoStats({ todos = [] }) {
  const completedCount = todos.filter(todo => todo.done).length;  //  выполненные задачи
  const uncompletedCount = todos.length - completedCount;  // невыполненные задачи

  return (
    <div>
      <p>Now we have {todos.length} todos!</p>
      <p>Completed: {completedCount}</p>
      <p>Uncompleted: {uncompletedCount}</p>
    </div>
  )
}