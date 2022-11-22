import * as Actions from "./ActionsTypes";

const initialState = {
  lastid: 3,
  tasks: [
    {
      id: 1,
      task: "Reviser Javascript",
      completed: false,
    },
    {
      id: 2,
      task: "Reviser Javas",
      completed: true,
    },
    {
      id: 3,
      task: "Reviser Python",
      completed: false,
    },
  ],
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_TASK:
      return {
        ...state,
        lastid: state.lastid + 1,
        tasks: [
          ...state.tasks,
          { id: state.lastid, task: action.payload, completed: false },
        ],
      };
  }
  return state;
};

export default TodoReducer;
