const initialState = {
    lastid:3,
    tasks : [
        {
            id:1,
            task: "Reviser Javascript",
            completed: false
        },
        {
            id:2,
            task: "Reviser Javas",
            completed: true
        },
        {
            id:3,
            task: "Reviser Python",
            completed: false
        }
    ]
}

const TodoReducer = (state=initialState, action) => {
    return state;
}

export default TodoReducer;
