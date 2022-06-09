import { useState } from 'react';
import { STAFFS } from '../shared/staffs';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function Search() {
    const [search, setSearch] = useState(-1);

        if (!(search.id + 1)) {
            return (
                <div className="search">
                    <input
                        id="enter"
                        type="text"
                        placeholder="Enter full name ..."
                        onChange={e => setSearch(() =>
                            {
                                let a = e.target.value;
                                let b = STAFFS.find(staff => staff.name === a);
                                if (b === undefined) {
                                    return -1;
                                }

                                return b;
                            })}
                    />
                    <Link to={`/home`}>
                        <i  className="fa fa-search icon-search" aria-hidden="true"></i>
                    </Link>
                </div>)
        }

        return (
                <div className="search">
                    <input
                        id="enter"
                        type="text"
                        placeholder="Enter full name ..."
                        onChange={e => setSearch(() =>
                            {
                                let a = e.target.value;
                                let b = STAFFS.find(staff => staff.name === a);
                                if (b === undefined) {
                                    return -1;
                                }

                                return b;
                            })}
                    />
                    <Link to={`/home/${search.id}`}>
                        <i  className="fa fa-search icon-search" aria-hidden="true"></i>
                    </Link>
                </div>
            )
     
    

    

}

export default Search;