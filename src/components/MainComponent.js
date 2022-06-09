import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Department from './DepartmentComponent';
import DishDetail from './DishdetailComponent';
import Salary from './SalaryComponent';
import Search from './SearchComponent';
import { STAFFS } from '../shared/staffs';
import { useLocation } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            staffs: STAFFS
        };
    }

    
    render() {
        const _staffs = this.state.staffs;

        function DishWithId(props) {
            const location = useLocation();
            let match = location.pathname;

            return(
                <DishDetail
                    dish={props.staffs.filter(staff => staff.id === Number(match.slice(6)))}
                    comment={props.staffs.filter(staff => staff.id === Number(match.slice(6)))}
                />
            );
        };

        return (
            <div>
                <Header />
                <Search />

                <Routes>
                    <Route path='/home' element={<Home staffs={_staffs}/>} />
                        <Route path='/home/:staffId'
                            element={<DishWithId staffs={_staffs}/>}
                        />
                    <Route exact path='/department' element={<Department />} />
                    <Route exact path='/salary' element={<Salary staffs={_staffs}/>} />
                        <Route exact path='/salary/:salaryState' element={<Salary staffs={_staffs}/>} />

                    <Route path="/" element={<Navigate to="/home" replace />} />
                </Routes>

                <Footer />
            </div>
        );
    }
}

export default Main;