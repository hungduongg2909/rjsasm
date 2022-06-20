export const Department = (state = {department: []}, action) => {
    switch (action.type) {
        case 'ADD_DEPARTMENT':
            return {...state, department: action.payload};

        default:
            return state;
    }
};