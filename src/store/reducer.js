const defaultState = {
  focused: false
}

export default (state = defaultState, action) => {
  if (action.type === 'handleInputFocus') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.focused = true
    return newState
  }
  if (action.type === 'handleInputBlur') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.focused = false
    return newState
  }
  return state
}