const lunches = (state = [], action) => {

  switch (action.type) {

    case 'ADD_USER_TO_LUNCH':

    // let new_state = state.slice(0);
    // new_state.push(action.value)
    //
    // console.log('reducer', action, state, new_state)

    return action.value;

    default:
      return state;

  }

};

export default lunches;
