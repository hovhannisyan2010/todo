
function reducer(state, action) {
    if(action.type === "add") {
      return [
        ...state,
        {
          id: Math.random(),
          text: action.payload,
          isCompleted: false
        }
      ];
    } else if(action.type === "delete") {
      return state.filter((t) => t.id !== action.payload.id);
    } else if(action.type === "clear-completed") {
      return state.filter((todo) => !todo.isCompleted);
    } else if(action.type === "change") {
      return state.map((todo) => {
        if(todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
    }
  }
  export default reducer