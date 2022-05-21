import {v1} from "uuid";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./tasksReducer";

test('Did the Task delete?', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();
    let taskID1 = v1()
    let taskID2 = v1()
    let taskID3 = v1()
    let taskID4 = v1()

    let startTasks = {
        [todolistId1]: [
            {id: taskID1, title: "HTML&CSS", isDone: true},
            {id: taskID2, title: "JS", isDone: true}
        ],
        [todolistId2]: [
            {id: taskID3, title: "Milk", isDone: true},
            {id: taskID4, title: "React Book", isDone: true}
        ]
    }
    let endTasks = tasksReducer(startTasks, removeTaskAC(todolistId2, taskID4))
    expect(endTasks[todolistId2].length).toBe(1)

})

test("did the Task add?", () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let startTasks = {
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true}
        ],
        [todolistId2]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "React Book", isDone: true}
        ]
    }
    let endTasks = tasksReducer(startTasks, addTaskAC(todolistId2, 'newTask'))
    expect(endTasks[todolistId2].length).toBe(3)
    expect(endTasks[todolistId2][2].title).toBe('newTask')

})

test('did status of checkbox change?', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let taskID1 = v1()
    let taskID2 = v1()
    let taskID3 = v1()
    let taskID4 = v1()

    let startTasks = {
        [todolistId1]: [
            {id: taskID1, title: "HTML&CSS", isDone: true},
            {id: taskID2, title: "JS", isDone: true}
        ],
        [todolistId2]: [
            {id: taskID3, title: "Milk", isDone: true},
            {id: taskID4, title: "React Book", isDone: true}
        ]
    }
    let endTasks = tasksReducer(startTasks, changeTaskStatusAC(todolistId1, taskID1, false))
    expect(endTasks[todolistId1][0].isDone).toBe(false)
})
test('did taskTitle change?', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let taskID1 = v1()
    let taskID2 = v1()
    let taskID3 = v1()
    let taskID4 = v1()

    let startTasks = {
        [todolistId1]: [
            {id: taskID1, title: "HTML&CSS", isDone: true},
            {id: taskID2, title: "JS", isDone: true}
        ],
        [todolistId2]: [
            {id: taskID3, title: "Milk", isDone: true},
            {id: taskID4, title: "React Book", isDone: true}
        ]
    }
    let endTasks = tasksReducer(startTasks, changeTaskTitleAC(todolistId1, taskID2, "yo!"))
    expect(endTasks[todolistId1][1].title).toBe("yo!")
})