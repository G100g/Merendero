const places = (state = { all: []}, action) => {

  switch (action.type) {

    case 'ADD_PLACE':

      // return { ...state, { ciccio: 2 } };
      //
      // console.log('aggiungo', action.value);
      console.log(state);

      // state.all.push(action.value);

      let place = {
        [action.value]: {
          name: action.value
        }
      };

      return Object.assign({}, state, place );

    default:
      return state;

  }

};

export default places;
