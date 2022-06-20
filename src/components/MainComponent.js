import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
// import Salary from './SalaryComponent';
// import DishDetail from './DishdetailComponent';
// import Deapartment from './DepartmentComponent';
import { fetchStaffs } from '../redux/ActionCreators';


const mapStateToProps = state => {
    return {
        staffs: state.staffs,
    //   comments: state.comments,
    //   promotions: state.promotions,
    //   leaders: state.leaders,
    //   departments: state.departments
    }
}

const mapDispatchToProps = dispatch => ({
    fetchStaffs: () => { dispatch(fetchStaffs())}
})

  
class Main extends Component {
    
    
    render() {

    //    const DishWithId = ({match}) => {

    //         return(
    //             <DishDetail
    //                 dish={this.state.staffs.filter((dish) => dish.id === Number(match.params.dishId))}
                    
    //                 comments={this.state.staffs.filter((comment) => comment.id === Number(match.params.dishId))}
    //             />
                
    //         );
    //     }

        return (
            <div>
                <Header />

                <Switch>
                    <Route exact path="/home" component={() => <Home staffs={this.props.staffs} />} />
                    {/* <Route path="/home/:dishId" component={DishWithId} />
                    <Route exact path='/department' component={() => <Deapartment leaders={this.props.departments} />} />
                    <Route exact path="/salary" component={() => <Salary staffs={this.props.staffs} />} /> */}

                    <Redirect to={{pathname: "/home"}}></Redirect>
                </Switch>

                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));