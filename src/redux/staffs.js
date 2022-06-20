export const Staffs = (state = {staffs: []}, action) => {
    switch (action.type) {
        case 'ADD_STAFFS':
            return {...state, staffs: action.payload};
        case 'ADD_STAFF':
            var staff = action.payload;
            return { staffs: staff };
        case 'REMOVE_STAFF':
            var staff2 = action.payload;
            return { staffs: staff2 };
        default:
            return state;
    }
};