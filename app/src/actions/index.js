export const addPlace = (name) => {
  return {
    type: 'ADD_PLACE',
    value: name,
  };
};


export const removePlace = (place_id) => {
  return {
    type: 'REMOVE_PLACE',
    value: place_id,
  };
};

export const addUserToLunch = (users_id) => {
  return {
    type: 'ADD_USER_TO_LUNCH',
    value: users_id,
  };
};
