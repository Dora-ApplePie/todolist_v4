import React, {useEffect, useState} from 'react'
import {todolistAPI} from "../api/todolistAPI";

export default {
    title: 'API'
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolists()
            .then((response) => {
                setState(response.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [title, setTitle] = useState<string>('')

    const createTodolist = () => {
        todolistAPI.createTodolist(title)
            .then((res) => {
                setState(res.data)
            })
    }
    return <div>
        <input placeholder={'enter title'}
               value={title}
               onChange={(e) => {
            setTitle(e.currentTarget.value)
        }}/>
        <button onClick={createTodolist}>Create</button>
        <div>{JSON.stringify(state)}</div>
    </div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>('')

    const deleteTodolist = () => {
        todolistAPI.deleteTodolist(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }
    return <div>
        <input placeholder={'enter todolistId'}
               value={todolistId}
               onChange={(e) => {
                   setTodolistId(e.currentTarget.value)
               }}/>
        <button onClick={deleteTodolist}>Delete</button>
        <div>{JSON.stringify(state)}</div>
    </div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const [title, setTitle] = useState<string>('')
    const [todolistId, setTodolistId] = useState<string>('')

    const updateTodolist = () => {
        todolistAPI.updateTodolist(title, todolistId)
            .then((res) => {
                setState(res.data)
            })
    }
    return <div>
        <input placeholder={'enter todolistId'}
               value={todolistId}
               onChange={(e) => {
                   setTodolistId(e.currentTarget.value)
               }}/>
        <input placeholder={'enter new title'}
               value={title}
               onChange={(e) => {
                   setTitle(e.currentTarget.value)
               }}
        />
        <button onClick={updateTodolist}>Update</button>
        <div>{JSON.stringify(state)}</div>
    </div>
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>('')
    const getTask = () => {
        todolistAPI.getTasks(todolistId)
            .then((resp) => {
                setState(resp.data)
            })
    }

    return <div>
        <input placeholder={'enter todolistId'}
               value={todolistId}
               onChange={(e) => {
                   setTodolistId(e.currentTarget.value)
               }}/>
        <button onClick={getTask}>Get tasks</button>
        <div>{JSON.stringify(state)}</div>
    </div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    const [title, setTitle] = useState<string>('')
    const [todolistId, setTodolistId] = useState<string>('')
    const createTask = () => {
        todolistAPI.createTask(todolistId, title)
            .then((resp) => {
                setState(resp.data)
            })
    }
    return <div>
        <input placeholder={'enter todolistId'}
               value={todolistId}
               onChange={(e) => {
                   setTodolistId(e.currentTarget.value)
               }}/>
        <input placeholder={'enter new task title'}
               value={title}
               onChange={(e) => {
                   setTitle(e.currentTarget.value)
               }}
        />
        <button onClick={createTask}>Create</button>
        <div>{JSON.stringify(state)}</div>
    </div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState<string>('')
    const [todolistId, setTodolistId] = useState<string>('')
    const deleteTask = () => {
        todolistAPI.deleteTask(todolistId, taskId)
            .then((resp) => {
                setState(resp.data)
            })
    }
    return <div>
        <input placeholder={'enter todolistId'}
               value={todolistId}
               onChange={(e) => {
                   setTodolistId(e.currentTarget.value)
               }}/>
        <input placeholder={'enter task id'}
               value={taskId}
               onChange={(e) => {
                   setTaskId(e.currentTarget.value)
               }}
        />
        <button onClick={deleteTask}>delete task</button>
        <div>{JSON.stringify(state)}</div>
    </div>
}

export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>('')
    const [taskId, setTaskId] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const updateTask = () => {
        todolistAPI.updateTask(todolistId, taskId, {
            title: title,
            description: '',
            status: 0,
            priority: 1,
            startDate: '',
            deadline: ''
        })
            .then((resp) => {
                setState(resp.data)
            })
    }

    return <div>
        <input placeholder={'enter todolistId'}
               value={todolistId}
               onChange={(e) => {
                   setTodolistId(e.currentTarget.value)
               }}/>
        <input placeholder={'enter task id'}
               value={taskId}
               onChange={(e) => {
                   setTaskId(e.currentTarget.value)
               }}
        />
        <input placeholder={'enter task title'}
               value={title}
               onChange={(e) => {
                   setTitle(e.currentTarget.value)
               }}
        />
        <button onClick={updateTask}>Update task</button>
        <div>{JSON.stringify(state)}</div>
    </div>
}
