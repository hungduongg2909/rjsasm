import { baseUrl } from '../shared/baseUrl';


export const fetchStaffs = () => (dispatch) => {    
    return fetch(baseUrl + 'staffs')
    .then(response => response.json())
    .then(staffs => dispatch(addStaffs(staffs)))
};

export const addStaffs = (staffs) => ({
    type: 'ADD_STAFFS',
    payload: staffs
});