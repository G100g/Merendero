const user = (state = [], action) => {

  switch (action.type) {

    case 'USER_LOGIN':

    // let new_state = state.slice(0);
    // new_state.push(action.value)
    //
    // console.log('reducer', action, state, new_state)

    return action.value;

    default:
      return state;

  }

};

export default user;
