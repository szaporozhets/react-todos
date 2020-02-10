export const CreateStore = (reducer) => {
  let state = {}
  let listeners = []

  const getState = () => state

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener());
  }

  const subscribe = (listener) => {
    listeners.push(listener)

    return () => {
      listeners.filter(l => l !== listener)
    }
  }

  return { getState, dispatch, subscribe }
}