import { STAFFS } from "../share/staffs";
import { useState } from "react";
import dateFormat from "dateformat";

function StaffList() {
    const [info, setInfo] = useState('');
    const [changeCol, setChangeCol] = useState('');

    function handleInfo(e) {
        let _info = STAFFS.find(staff => staff.id == Number(e.id))
        console.log()
        setInfo(
            <div>
                <h1>Họ và tên: {_info.name}</h1>
                <p>Ngày sinh: {dateFormat(_info.doB, "dd/mm/yyyy")}</p>
                <p>Ngày vào công ty: {dateFormat(_info.startDate, "dd/mm/yyyy")}</p>
                <p>Phòng ban: {_info.department.name}</p>
                <p>Số ngày nghỉ còn lại: {_info.annualLeave}</p>
                <p>Số ngày đã làm thêm: {_info.overTime}</p>
            </div>
        );
    }

    function handleChangeCol(e) {
        let _col = "staffList col-"+(12/Number(e.innerHTML));

        setChangeCol(
            STAFFS.map( staff => {
                return (
                    <li key={staff.id} className={_col}>
                        <div className="staff" id={staff.id} onClick={(e) => {handleInfo(e.target)}}>{staff.name}</div>
                    </li>
                )
            })
        )
    }

    const staffs = STAFFS.map( staff => {
        return (
            <li key={staff.id} className="staffList col-12 col-md-6 col-xl-4">
                <div className="staff" id={staff.id} onClick={(e) => {handleInfo(e.target)}}>{staff.name}</div>
            </li>
        )
    });


    return (
        <div className="main container">
            <div className="row">
                    {changeCol || staffs}

                    <p>Bấm vào tên nhân viên để xem thông tin</p>

                    <div>
                        <p>Choose number colum</p>
                        <button type="button" className="btn btn-primary" onClick={(e) => {handleChangeCol(e.target)}}>2</button>
                        <button type="button" className="btn btn-primary" onClick={(e) => {handleChangeCol(e.target)}}>3</button>
                        <button type="button" className="btn btn-primary" onClick={(e) => {handleChangeCol(e.target)}}>6</button>
                    </div>

                    {info}
            </div>
        </div>
    )
}

export default StaffList;