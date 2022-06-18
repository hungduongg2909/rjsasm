import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Alert,
 Modal, ModalHeader, ModalBody, Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Row, Form, FormGroup, Input, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

function RenderHomeItem ({dish, onClick}) {
    return (
        <Card>
            <Link to={`/home/${dish.id}`} >
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <Card className="text-center">
                    <CardTitle>{dish.name}</CardTitle>
                </Card>
            </Link>
        </Card>
    );
}


class Home extends Component{
    
    constructor(props) {
        super(props);


        this.state = {
            newDishes: this.props.dishes,
            isModalOpen: false,
            newAdd: []

        }
        
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
      this.toggleModal = this.toggleModal.bind(this);
      this.sendData = this.sendData.bind(this);
      
      
    }

    sendData(a) {
        this.props.parentCallback(a);
    }

    handleSubmit(values) {
        this.toggleModal();
        let n = 1;
        while (localStorage.getItem(n) != null) {
            n++
        }

        localStorage.setItem(n, JSON.stringify(values));

        let m = 1;
        let array = [];
        let arrayData = [];
        while (localStorage.getItem(m) != null) {
            let obj = JSON.parse(localStorage.getItem(m));

            let object = {
                ...obj,
                id: this.state.newDishes.length + m - 1,
                department: Number(obj.department),
                image: '/assets/images/alberto.png',
                annualLeave: Number(obj.annualLeave),
                overTime: Number(obj.overTime),
                salaryScale: Number(obj.salaryScale),
            }

            arrayData.push(JSON.stringify(object));
            array.push(object)

            m++;
        }

        this.sendData(arrayData)
        this.setState({newAdd: array})
    };

    handleLogin(event) {
        if (this.username.value) {
            const newDishes = this.props.dishes.filter(d => d.name.toLowerCase().indexOf(this.username.value.toLowerCase()) != -1);

            if (newDishes.length != 0) {

                this.setState({newDishes: newDishes});
            } else {

                alert('Input is fail');
            }
            
        } else {
            alert('Input is fail');
        }
        event.preventDefault();

    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

    render() {
        const home = this.state.newDishes.map((dish) => {
            return (
                <div className="col-6 col-md-4 col-xl-2"  key={dish.id}>
                    <RenderHomeItem dish={dish} />
                </div>
            );
        });

        const add = this.state.newAdd.map((item) => {
            return (
                <div className="col-6 col-md-4 col-xl-2"  key={item.id}>
                    <RenderHomeItem dish={item} />
                </div>
            )
        });



        return (
            <React.Fragment>
            <div className="container">

                <div className="row heading_search">

                    <Breadcrumb className="">
                        <BreadcrumbItem active >Nhân viên</BreadcrumbItem>
                    </Breadcrumb> 

                    <Nav className="" navbar>
                        <NavItem>
                            <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> </Button>
                        </NavItem>
                    </Nav>

                    

                    <Form onSubmit={this.handleLogin} className="formSearch">
                            <Input type="text" id="username" name="username"
                                innerRef={(input) => this.username = input} />
                        
                        <Button type="submit" value="submit" color="primary">Search</Button>
                    </Form>
                
                </div>
            
                <div className="row">
                    {home}
                    {add}
                </div>
            </div>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Thêm Nhân viên</ModalHeader>
            <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)} >
            <Row className="form-group">
                                <Label htmlFor="name" md={5}>Tên</Label>
                                <Col md={7}>
                                    <Control.text model=".name" id="name" name="name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Yêu cầu nhập',
                                            minLength: 'Yêu cầu nhiều hơn 2 ký tự',
                                            maxLength: 'Yêu cầu ít hơn 30 ký tự'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="doB" md={5}>Ngày sinh</Label>
                                <Col md={7}>
                                    <Control.text model=".doB" id="doB" name="doB" type="date"
                                        className="form-control"
                                        value={this.state.tenState}
                                        validators={{
                                            required
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".doB"
                                        show="touched"
                                        messages={{
                                            required: 'Yêu cầu nhập'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="startDate" md={5}>Ngày vào công ty</Label>
                                <Col md={7}>
                                    <Control.text model=".startDate" id="startDate" name="startDate" type="date"
                                        className="form-control"
                                        value={this.state.tenState}
                                        validators={{
                                            required
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".startDate"
                                        show="touched"
                                        messages={{
                                            required: 'Yêu cầu nhập'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                            <Label htmlFor="startDate" md={5}>Phòng ban</Label>

                                <Col md={7}>
                                    <Control.select model=".department" name="department"
                                        defaultValue={1}
                                        className="form-control">
                                        <option value={0}>Sale</option>
                                        <option value={1}>HR</option>
                                        <option value={2}>Marketing</option>
                                        <option value={3}>IT</option>
                                        <option value={4}>Finance</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="salaryScale" md={5}>Hệ số lương</Label>
                                <Col md={7}>
                                    <Control.text model=".salaryScale" id="salaryScale" name="salaryScale"
                                        className="form-control"
                                        validators={{
                                            required, isNumber
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".salaryScale"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            isNumber: 'Must be a number'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="annualLeave" md={5}>Số ngày nghỉ còn</Label>
                                <Col md={7}>
                                    <Control.text model=".annualLeave" id="annualLeave" name="annualLeave"
                                        className="form-control"
                                        validators={{
                                            required, isNumber
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".annualLeave"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            isNumber: 'Must be a number'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="overTime" md={5}>Số ngày đã làm thêm</Label>
                                <Col md={7}>
                                    <Control.text model=".overTime" id="overTime" name="overTime"
                                        className="form-control"
                                        validators={{
                                            required, isNumber
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".overTime"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            isNumber: 'Must be a number'
                                        }}
                                     />
                                </Col>
                            </Row>
                
                        <Row className="form-group">
                            
                            <Col md={2}>
                                <Button type="submit" color="primary">
                                Add
                                </Button>
                            </Col>
                        </Row>
                        
                    </LocalForm>
            </ModalBody>

                    </Modal>
            </React.Fragment>
        );
    }
}

export default Home;