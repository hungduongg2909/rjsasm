import React from 'react';
import { Card, CardImg, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDepartmentItem ({dish}) {
    return (
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <Card className="text-center">
                <CardTitle>{dish.name}</CardTitle>
            </Card>
        </Card>
    );
}


const Department = (props) => {
    let _departments = props.department.department
    console.log(_departments)

    if (_departments.length !== 0) {       
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/department">Departments</Link></BreadcrumbItem>
                    </Breadcrumb>              
                </div>

                <div className="row">
                    {
                        _departments.map(department => (
                            <div className="col-6 col-md-4 col-xl-2"  key={department.id}>
                                <RenderDepartmentItem
                                    dish={department}
                                />
                            </div>
                        ))
                    }
                </div>
                
            </div>
        );
    }
    else
        return(
            <div></div>
        );
    
}

export default Department;