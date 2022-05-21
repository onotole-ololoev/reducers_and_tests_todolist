import {TodolistType} from "../App";
import {v1} from "uuid";

export const todoListReducer = (state: Array<TodolistType>, action: todoListReducerActionsType): TodolistType[] => {
    switch (action.type) {
        case 'CHANGE-TODOLIST-TITLE':
            return state.map(tl => tl.id === action.payload.id ? {...tl, title: action.payload.title} : tl);

        case "REMOVE-TODOLIST":
            return state.filter(tl => tl.id !== action.payload.id)
        case "ADD-TODOLIST":
            return [...state, {id: v1(), title: action.payload.title, filter: "all"}]
        default:
            return state
    }
}

type todoListReducerActionsType = changeTodoListTitleACType
    | removeTodoListACType | addTodoListACType

type changeTodoListTitleACType = ReturnType<typeof changeTodoListTitleAC>
export const changeTodoListTitleAC = (id: string, title: string) => {
    return {
        type: "CHANGE-TODOLIST-TITLE",
        payload: {id, title}
    } as const
}
type removeTodoListACType = ReturnType<typeof removeTodoListAC>
export const removeTodoListAC = (id: string) => {
    return {
        type: "REMOVE-TODOLIST",
        payload: {id}
    } as const
}
type addTodoListACType = ReturnType<typeof addTodoListAC>
export const addTodoListAC = (title: string) => {
    return {
        type: "ADD-TODOLIST",
        payload: {title}
    } as const
}
