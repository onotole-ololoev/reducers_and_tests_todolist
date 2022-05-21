
import {v1} from "uuid";
import {TodolistType} from "../App";
import {addTodoListAC, changeTodoListTitleAC, removeTodoListAC, todoListReducer} from "./todoListReducer";

test('is todolist title change correct?', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const endState = todoListReducer(startState, changeTodoListTitleAC(todolistId2, "Hello"))

    expect(endState[1].title).toBe('Hello')

})

test("did the list delete?", () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
    const endState = todoListReducer(startState, removeTodoListAC(todolistId2))
    expect(endState.length).toBe(1)
    expect(endState[0].title).toBe("What to learn")
})
 test("did the list add?", () => {
     let todolistId1 = v1();
     let todolistId2 = v1();

     const startState: Array<TodolistType> = [
         {id: todolistId1, title: "What to learn", filter: "all"},
         {id: todolistId2, title: "What to buy", filter: "all"}
     ]
      const endState = todoListReducer(startState, addTodoListAC("I am a new List!"))
     expect(endState.length).toBe(3)
     expect(endState[2].title).toBe("I am a new List!")
 })


