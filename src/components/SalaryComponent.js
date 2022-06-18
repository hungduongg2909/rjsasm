import React from 'react';


function Salary({staffs}) {
    return (
        <div className="container salary">
            <div className="row">

                <br></br>

                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">FULL NAME</th>
                        <th scope="col">COEFFICIENTS SALARY</th>
                        <th scope="col">OT</th>
                        <th scope="col">SALARY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            staffs.map(staff => (
                                    <tr key={staff.id} className="salary_staff">
                                    <th scope="row">{staff.id + 1}</th>
                                    <td>{staff.name}</td>
                                    <td>{staff.salaryScale}</td>
                                    <td>{staff.overTime}</td>
                                    <td>{staff.salaryScale*3000000 + staff.overTime*2000000}</td>
                                    </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Salary;