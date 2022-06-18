import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
/* import { Switch, Route, Redirect } from 'react-router-dom';
        Switch & Redirect has been removed from React router v6, and replaced Routes and Navigate*/
import { connect } from 'react-redux';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Salary from './SalaryComponent';
import DishDetail from './DishdetailComponent';
import Deapartment from './DepartmentComponent';
import { STAFFS } from '../shared/staffs'

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders,
      staffs: state.staffs,
      departments: state.departments
    }
  }

  
  class Main extends Component {
      
      constructor(props) {
          super(props);

          this.state = {

            staffs: STAFFS
          }
        
    }


    
    render() {

       const DishWithId = ({match}) => {

            console.log(this.state.staffs)

            return(
                <DishDetail
                    dish={this.state.staffs.filter((dish) => dish.id === Number(match.params.dishId))}
                    
                    comments={this.state.staffs.filter((comment) => comment.id === Number(match.params.dishId))}
                />
                
            );
        }

        const callbackFunction = (childData) => {
            
            let data = childData.map(child => JSON.parse(child))

            let data3 = [...STAFFS, ...data];
            
            this.setState({staffs: data3});
            
        }
        
        

        return (
            <div>
                <Header />

                <Switch>
                    <Route exact path="/home" component={() => <Home dishes={this.state.staffs} parentCallback={callbackFunction} />} />
                    <Route path="/home/:dishId" component={DishWithId} />
                    <Route exact path='/department' component={() => <Deapartment leaders={STAFFS.departments} />} />
                    <Route exact path="/salary" component={() => <Salary staffs={STAFFS.staffs} />} />

                    <Redirect to={{pathname: "/home"}}></Redirect>
                </Switch>

                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));