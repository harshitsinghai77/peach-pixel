import React from 'react';
import '../dashboard/style.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return(
        <div className="s-layout__sidebar">
            <a className="s-sidebar__trigger" href="#0">
                <i className="fa fa-bars"></i>
            </a>

            <nav className="s-sidebar__nav">
                <h1>Welcome,<br /><div id="underliner"></div> Harshit </h1>
                <ul>
                    <li>
                    <Link className="s-sidebar__nav-link" to="/createwebsite">
                        <i className="fa fa-camera"></i><em>NEW</em>
                    </Link><div className="unde"></div>
                    </li>
                    <li>
                    <Link className="s-sidebar__nav-link" to="/dashboard">
                        <i className="fa fa-home"></i><em>DASHBOARD</em>
                        
                    </Link><div className="unde"></div>
                    </li>
                </ul>
                <button className="form__button"><h3>ACCOUNT</h3></button>
            </nav>
        </div>
    )
}

export default Sidebar
