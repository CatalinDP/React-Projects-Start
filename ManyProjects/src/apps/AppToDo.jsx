import { useState } from 'react'
import './App.css'
import { useToDo } from '../logic/useToDo'

function AppToDo() {
  const { toDoArray, addTask, delTask } = useToDo();
  const [newTask, setNewTask] = useState("")

  const handleNewTask = () => {
    if (newTask === "") {
      alert('Introduce la tarea')
      return
    }
    addTask(newTask);
    setNewTask("")
  }

  return (
    <main>
      <section>
        <h1>To-Do List</h1>
        <form>
          <input type="text" placeholder="Add a new task" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
          <button type="button" onClick={handleNewTask}>Add</button>
        </form>
      </section>
      <section>
        <ul className="ul">
          {
            toDoArray.map((task, index) => {
              return (
                <li key={index}>
                  {task}
                  <button onClick={() => { delTask(index)}}>
                    x
                  </button>
                </li>
              )
            })
          }
        </ul>
      </section>
    </main>
  )
}

export default AppToDo
