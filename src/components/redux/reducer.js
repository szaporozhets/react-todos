import actionTypes from './actions'

export const menu = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_MENU:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export const todos = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [ ...state, ...action.payload ]
    case actionTypes.CHANGE_TODO:
      const todos = state.map(todo => {
        if (todo.text !== action.payload.text) {
          return todo;
        }
        return { 
          ...todo, 
          completed: !todo.completed 
        }
      })

      return [ ...todos ]
    case actionTypes.DELETE_TODO:
      return [ ...state.filter(todo => todo.text !== action.payload.text) ]
    default:
      return state
  }
}
