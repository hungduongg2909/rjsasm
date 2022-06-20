export const Staffs = (state = {staffs: []}, action) => {
    switch (action.type) {
      case 'ADD_STAFFS':
        return {...state, staffs: action.payload};
  
      default:
        return state;
    }
  };