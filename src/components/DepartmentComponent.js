import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media} from 'reactstrap';
import { Link } from 'react-router-dom';

function Department(props) {
    return (
        <div className="container department">
            <div className="row gx-3 gy-3">
                {
                    props.leaders.map(department => {
                        return (
                            <li className="departments_list col-12 col-md-6 col-xl-4" key={department.id}>
                                <div>
                                    <h2>{department.name}</h2>
                                    <p className="text-center">Số lượng nhân viên : <strong className="number_department">{department.numberOfStaff}</strong></p>
                                </div>
                            </li>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Department;   