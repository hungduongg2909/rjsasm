import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";

function RenderDish({dish}) {
    let _dish = dish[0]
    return(
        <div className="col-12 col-md-4 col-xl-3">
            <Card>
                <CardImg top src={_dish.image} alt={_dish.name} />
            </Card>
        </div>
    );

}

function RenderComments({comments}) {
    if (comments != null)
        return(
            <div className="col-12 col-md-8 col-xl-9">
                <ul>
                    {comments.map((comment) => {
                        let a;
                        switch (comment.department) {
                            case 0:
                                a = 'Sale'
                                break;
                            case 1:
                                a = 'HR'
                                break;
                            case 2:
                                a = 'Marketing'
                                break;
                            case 3:
                                a = 'IT'
                                break;
                            case 4:
                                a = 'Finance'
                                break;
                            default:
                                break;
                        }

                        let b = a ? a : comment.department.name;

                        return (
                            <div key={comment.id}>
                                <h3>Họ và tên: {comment.name}</h3>
                                <p>Ngày sinh: {dateFormat(comment.doB, "dd/mm/yyyy")}</p>
                                <p>Ngày vào công ty: {dateFormat(comment.startDate, "dd/mm/yyyy")}</p>
                                <p>Phòng ban: {b}</p>
                                <p>Số ngày nghỉ còn lại: {comment.annualLeave}</p>
                                <p>Số ngày đã làm thêm: {comment.overTime}</p>
                            </div>
                        );
                    })}
                </ul>
            </div>
        );
    else
        return(
            <div></div>
        );
}


const DishDetail = (props) => {

    if (props.dish != null) {       
        return (
            <div className="container dishdetail">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish[0].id}</BreadcrumbItem>
                    </Breadcrumb>              
                </div>

                <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
    else
        return(
            <div></div>
        );
}

export default DishDetail;