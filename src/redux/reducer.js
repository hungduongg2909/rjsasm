import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders'; 
import { DEPARTMENTS } from '../shared//staffs';
import { STAFFS } from '../shared//staffs';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS,
    departments: DEPARTMENTS,
    staffs: STAFFS
};

export const Reducer = (state = initialState, action) => {
    return state;
};