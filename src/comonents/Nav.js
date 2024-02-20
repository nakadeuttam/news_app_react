import React, { Component } from 'react'
import {Link} from "react-router-dom";
export class Nav extends Component {
  render() {

    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme={this.props.nav} >
  <div className="container-fluid dark" >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">log in</a>
        </li>
        <li className="nav-item" style={{marginRight:'150px'}}>
          <a className="nav-link" href="/">Sign up</a>
        </li>
        
          <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">General</Link> </li>
          <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/Sports">Sports</Link> </li>
          <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/Entertainment">Entertainment</Link> </li>
          <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/Health">Health</Link> </li>
          <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/Business">Business</Link> </li>
          <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/Technology">Technology</Link> </li>
          <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/Science">Science</Link> </li>

      </ul>

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        <div className="form-check form-switch" style={{margin:'10px'}}>
  <input  onClick={this.props.toggleTheme}  className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Dark</label>
</div>

      </form>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Nav
