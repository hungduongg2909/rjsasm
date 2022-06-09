import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = (props) => {
    let _props = props.staffs
    const staffs = _props.map( staff => {

        return (
            <li key={staff.id} className="staff_list text-center col-6 col-md-4 col-xl-2">
                <Link to={`/home/${staff.id}`} >
                    <div className="img_staff"><img src={staff.image} alt={staff.id} /></div>
                    <div className="staff" id={staff.id}>{staff.name}</div>
                </Link>
            </li>
        )
    });

    return (
        <div className="main container">
            <div className="row">
                    {staffs}
            </div>
        </div>
    )
}

export default Home;