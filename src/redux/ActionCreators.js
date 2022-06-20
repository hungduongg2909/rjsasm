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


export const postStaff = (name, doB, salaryScale, startDate, departmentId, annualLeave, overTime, salary) => (dispatch) => {
    
    const newStaff = {
        name: name,
        doB: doB,
        salaryScale: salaryScale,
        startDate: startDate,
        departmentId: departmentId,
        annualLeave: annualLeave,
        overTime: overTime,
        salary: salary
    };
    newStaff.image = "/assets/images/alberto.png";
    
    return fetch(baseUrl + 'staffs', {
        method: "POST",
        body: JSON.stringify(newStaff),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => response.json())
    .then(response => dispatch(addStaff(response)))
};

export const addStaff = (staff) => ({
    type: 'ADD_STAFF',
    payload: staff
});


export const delStaff = (id) => (dispatch) => {
    return fetch(baseUrl + 'staffs/' + id, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(response => dispatch(removeStaff(response)))
};

export const removeStaff = (staff) => ({
    type: 'REMOVE_STAFF',
    payload: staff
});

export const fetchDepartments = () => (dispatch) => {    
    return fetch(baseUrl + 'departments')
    .then(response => response.json())
    .then(departments => dispatch(addDepartments(departments)))
};

export const addDepartments = (departments) => ({
    type: 'ADD_DEPARTMENTS',
    payload: departments
});


export const fetchDepartment = (idD) => (dispatch) => {
    return fetch(baseUrl + 'departments/' + idD)
    .then(response => response.json())
    .then(response => dispatch(addDepartment(response)))
};

export const addDepartment = (department) => ({
    type: 'ADD_DEPARTMENT',
    payload: department
});

export const fetchSalary = () => (dispatch) => {    
    return fetch(baseUrl + 'staffsSalary')
    .then(response => response.json())
    .then(salary => dispatch(addSalary(salary)))
};

export const addSalary = (salary) => ({
    type: 'ADD_SALARY',
    payload: salary
});