import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Salary({staffs}) {
    let location = useLocation();
    let match = location.pathname;

    if (match.length == 9) {
        let staffs2 =
            [staffs[4], staffs[0], staffs[1], staffs[2], staffs[3], staffs[5], staffs[6], staffs[7], staffs[8], staffs[9], staffs[10], staffs[11], staffs[12], staffs[13], staffs[14], staffs[15]];

        if(Number(match.slice(8)) == 1) {
            staffs = [...staffs2]
        } else {
            staffs = [...staffs2.reverse()]
        }
        
    }

    return (
        <div className="container salary">
            <div className="row">
                <h5 className='sort'>Sắp xếp theo lương : <Link to='/salary/1'><button>Tăng dần</button></Link>     <Link to='/salary/2'><button>Giảm dần</button></Link></h5>

                <br></br>

                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">FULL NAME</th>
                        <th scope="col">COEFFICIENTS SALARY</th>
                        <th scope="col">OT</th>
                        <th scope="col">SALARY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            staffs.map(staff => (
                                    <tr key={staff.id} className="salary_staff">
                                    <th scope="row">{staff.id + 1}</th>
                                    <td>{staff.name}</td>
                                    <td>{staff.salaryScale}</td>
                                    <td>{staff.overTime}</td>
                                    <td>{staff.salaryScale*3000000 + staff.overTime*2000000}</td>
                                    </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Salary;