import React, { Component } from 'react';
import { Nav, NavItem,
 Modal, ModalHeader, ModalBody, Card, CardImg,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { FadeTransform } from 'react-animation-components';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));

function RenderHomeItem ({dish, delStaff, id}) {
    return (
        <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)'
        }}>
            <Card>
                <i className="remove fa fa-times" aria-hidden="true" onClick={() => delStaff(id)}></i>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <Card className="text-center">
                    <CardTitle>{dish.name}</CardTitle>
                </Card>
            </Card>
        </FadeTransform>

    );
}


class Home extends Component{
    
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        }
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this); 
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.postStaff(values.name, values.doB, Number(values.salaryScale), values.startDate, values.departmentId,
            Number(values.annualLeave), Number(values.overTime), Number(values.salary))
    };

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

    render() {
        const home = this.props.staffs.staffs.map((dish) => {
            return (
                <div className="col-6 col-md-4 col-xl-2"  key={dish.id}>
                    <RenderHomeItem
                        dish={dish}
                        delStaff={this.props.delStaff}
                        id={dish.id}
                    />
                </div>
            );
        });



        return (
            <React.Fragment>
            <div className="container">

                <div className="row heading_search">

                    <Breadcrumb className="">
                        <BreadcrumbItem active >Nh??n vi??n</BreadcrumbItem>
                    </Breadcrumb> 

                    <Nav className="" navbar>
                        <NavItem>
                            <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> </Button>
                        </NavItem>
                    </Nav>
                </div>
            
                <div className="row">
                    {home}
                </div>
            </div>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Th??m Nh??n vi??n</ModalHeader>
            <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)} >
            <Row className="form-group">
                                <Label htmlFor="name" md={5}>T??n</Label>
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
                                            required: 'Y??u c???u nh???p',
                                            minLength: 'Y??u c???u nhi???u h??n 2 k?? t???',
                                            maxLength: 'Y??u c???u ??t h??n 30 k?? t???'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="doB" md={5}>Ng??y sinh</Label>
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
                                            required: 'Y??u c???u nh???p'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="startDate" md={5}>Ng??y v??o c??ng ty</Label>
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
                                            required: 'Y??u c???u nh???p'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                            <Label htmlFor="departmentId" md={5}>Ph??ng ban</Label>

                                <Col md={7}>
                                    <Control.select model=".departmentId" name="departmentId"
                                        defaultValue={'Dept04'}
                                        className="form-control">
                                        <option value={'Dept01'}>Sale</option>
                                        <option value={'Dept02'}>HR</option>
                                        <option value={'Dept03'}>Marketing</option>
                                        <option value={'Dept04'}>IT</option>
                                        <option value={'Dept05'}>Finance</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="salaryScale" md={5}>H??? s??? l????ng</Label>
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
                                <Label htmlFor="annualLeave" md={5}>S??? ng??y ngh??? c??n</Label>
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
                                <Label htmlFor="overTime" md={5}>S??? ng??y ???? l??m th??m</Label>
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
                                <Label htmlFor="salary" md={5}>L????ng</Label>
                                <Col md={7}>
                                    <Control.text model=".salary" id="salary" name="salary"
                                        className="form-control"
                                        validators={{
                                            required, isNumber
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".salary"
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