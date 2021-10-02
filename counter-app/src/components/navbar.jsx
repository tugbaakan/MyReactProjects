import React from 'react'

const Navbar = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar {" "}
                    <span className="badge rounded-pill bg-secondary">{totalCounters}</span>
                    </a>
            </div>
        </nav>
      );
}
 
export default Navbar;