export const Departments = (state = {departments: []}, action) => {
    switch (action.type) {
        case 'ADD_DEPARTMENTS':
            return {...state, departments: action.payload};

        default:
            return state;
    }
};