export const Salary = (state = {salary: []}, action) => {
    switch (action.type) {
        case 'ADD_SALARY':
            return {...state, salary: action.payload};

        default:
            return state;
    }
};