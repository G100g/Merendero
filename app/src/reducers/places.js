const places = (state = { all: []}, action) => {

  switch (action.type) {

    case 'ADD_PLACE':

      // return { ...state, { ciccio: 2 } };
      //
      // console.log('aggiungo', action.value);
      console.log(state);

      // state.all.push(action.value);

      let newall = state.all.slice(0);
      newall.push(action.value);

      return Object.assign({}, state, { all: newall } );

    default:
      return state;

  }

};

export default places;
