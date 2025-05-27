import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
   return(
<>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link class="navbar-brand" to='/'>Expense Management </Link> 
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/user" class="nav-link active" aria-current="page" >USER</Link>
        </li>
        
      </ul>
    
    </div>
  </div>
</nav>
</>

   )


}

export default Header