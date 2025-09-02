import { useState } from "react";

export function useToDo() {
    const [toDoArray, setToDoArray] = useState([])

    const addTask = (task) => {
        setToDoArray([...toDoArray, task])
    }
    const delTask = (index) => {
        setToDoArray(toDoArray.filter((_, i) => i !== index))
    }
    return { toDoArray, addTask, delTask }
}
