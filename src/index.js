import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import { menu, todos } from './components/redux/reducer'
import App from './components/stage-3/App'

const reducer = combineReducers({ menu, todos })
const initialState = {
  todos: [],
  menu: {
    items: ['All', 'Active', 'Completed'],
    selected: 'All'
  }
}
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
