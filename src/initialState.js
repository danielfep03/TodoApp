import {v4 as uuid} from 'uuid'


const dataDummy = [
    {
        id: JSON.stringify(uuid()),
        task: 'Complete online JavaScript course',
        completed: true,
    },
    {
        id: JSON.stringify(uuid()),
        task: 'Jog around the park 3x',
        completed: true,
    },
    {
        id: JSON.stringify(uuid()),
        task: '10 minutes meditation',
        completed: false,
    },
    {
        id: JSON.stringify(uuid()),
        task: 'Read for 1 hour',
        completed: false,
    },
    {
        id: JSON.stringify(uuid()),
        task: 'Pick up groceries',
        completed: false,
    },
    {
        id: JSON.stringify(uuid()),
        task: 'Complete Todo App on Frontend Mentor',
        completed: false,
    }
]

let initialState = []

if (localStorage.getItem('tasks') === null){
    initialState = [...dataDummy]
    localStorage.setItem('tasks', JSON.stringify(dataDummy))
}
else {
    const data = JSON.parse(localStorage.getItem('tasks'))
    initialState = [...data]
}

export default initialState
