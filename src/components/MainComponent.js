import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Departments from './DepartmentsComponent';
import Department from './DepartmentComponent';
import Salary from './SalaryComponent';
import { fetchStaffs, postStaff, delStaff, fetchDepartments, fetchDepartment, fetchSalary } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const mapStateToProps = state => {
    return {
        staffs: state.staffs,
        departments: state.departments,
        department: state.department,
        salary: state.salary
    }
}

const mapDispatchToProps = dispatch => ({
    fetchStaffs: () => dispatch(fetchStaffs()),
    postStaff: (name, doB, salaryScale, startDate, departmentId, annualLeave, overTime, salary) =>
        dispatch(postStaff(name, doB, salaryScale, startDate, departmentId, annualLeave, overTime, salary)),
    delStaff: (id) => dispatch(delStaff(id)),
    fetchDepartments: () => dispatch(fetchDepartments()),
    fetchDepartment: (idD) => dispatch(fetchDepartment(idD)),
    fetchSalary: () => dispatch(fetchSalary())
})

  
class Main extends Component {
    
    componentDidMount() {
        this.props.fetchStaffs();
        this.props.fetchDepartments();
        this.props.fetchSalary();
    }
    
    render() {

        return (
            <div>
                <Header />
                    <TransitionGroup>
                        <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                            <Switch location={this.props.location}>
                                <Route exact path="/home" component={() => <Home
                                                                                staffs={this.props.staffs}
                                                                                postStaff={this.props.postStaff}
                                                                                delStaff={this.props.delStaff}
                                                                            />}
                                />
                                <Route exact path='/department' component={() => <Departments
                                                                                    departments={this.props.departments}
                                                                                    fetchDepartment={this.props.fetchDepartment}
                                                                                />}
                                />
                                <Route path="/department/:id" component={() => <Department department={this.props.department} />} />
                                <Route exact path="/salary" component={() => <Salary salary={this.props.salary} />} />

                                <Redirect to={{pathname: "/home"}}></Redirect>
                            </Switch>
                        </CSSTransition>
                </TransitionGroup>

                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));