import React from 'react';
import { Link } from 'react-router-dom';

function Departments({departments, fetchDepartment}) {
    if (departments.departments.length === 0) {
        return (
            <div></div>
        )
    }
    return (
        <div className="container department">
            <div className="row gx-3 gy-3">
                {
                    departments.departments.map(department => {
                        return (
                            <RenderDepartment key={department.id} department={department} fetchDepartment={fetchDepartment}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

function RenderDepartment({department, fetchDepartment}) {
    return (
            <li className="departments_list col-12 col-md-6 col-xl-4">
        <Link to={`/department/${department.id}`}>
                <div onClick={() => fetchDepartment(department.id)}>
                    <h2>{department.name}</h2>
                    <p className="text-center">Số lượng nhân viên : <strong className="number_department">{department.numberOfStaff}</strong></p>
                </div>
        </Link>
            </li>
    )
}

export default Departments;  