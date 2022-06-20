import React from 'react';


function Salary({salary}) {
    let _salary = salary.salary
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
                            _salary.map(salary => (
                                    <tr key={salary.id} className="salary_staff">
                                    <th scope="row">{salary.id + 1}</th>
                                    <td>{salary.name}</td>
                                    <td>{salary.salaryScale}</td>
                                    <td>{salary.overTime}</td>
                                    <td>{salary.salaryScale*3000000 + salary.overTime*2000000}</td>
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