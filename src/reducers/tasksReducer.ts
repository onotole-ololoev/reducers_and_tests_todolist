import {TasksStateType} from "../App";
import {v1} from "uuid";


export const tasksReducer = (state: TasksStateType, action: tasksReducerActionType): TasksStateType => {
    switch (action.type) {
        case "REMOVE-TASK":
            let item = state[action.payload.todolistID]
            let newArr = item.filter(el => el.id !== action.payload.taskID)
            return {...state, [action.payload.todolistID]: newArr}
        case "ADD-TASK":
            return {
                ...state,
                [action.payload.todolistID]: [...state[action.payload.todolistID], {id: v1(), title: action.payload.title, isDone: false}]
            }
        case "CHANGE-STATUS":
            return {
                ...state,
                [action.payload.todolistID]: state[action.payload.todolistID].map(el => el.id === action.payload.taskID ? {...el, isDone: action.payload.isDone} : el)
            }
        case "CHANGE-TASK-TITLE":
            let arr = state[action.payload.todolistID]
            let newArr2 = arr.map( el => el.id === action.payload.taskID ? {...el, title: action.payload.title} : el)
            return {
                ...state,
                [action.payload.todolistID]: newArr2
            }
        default:
            return state
    }

}
type tasksReducerActionType = removeTaskACType |
    addTaskACType | changeTaskStatusACType | changeTaskTitleACType
type removeTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (todolistID: string, taskID: string) => {
    return {
        type: "REMOVE-TASK",
        payload: {todolistID, taskID}
    } as const
}
type addTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (todolistID: string, title: string) => {
    return {
        type: "ADD-TASK",
        payload: {todolistID, title}
    } as const
}
type changeTaskStatusACType = ReturnType<typeof changeTaskStatusAC>
export const changeTaskStatusAC = (todolistID: string, taskID: string, isDone: boolean) => {
    return {
        type: "CHANGE-STATUS",
        payload: {todolistID, taskID, isDone}
    } as const
}
type changeTaskTitleACType = ReturnType<typeof changeTaskTitleAC>
export const changeTaskTitleAC = (todolistID: string, taskID: string, title: string) => {
    return {
        type: "CHANGE-TASK-TITLE",
        payload: {todolistID, taskID, title}
    } as const
}
