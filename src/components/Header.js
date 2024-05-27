import React from 'react'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
    <p className="navbar-brand">Navbar</p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <p className="nav-link active" aria-current="page">Home</p>
        </li>
        <li className="nav-item">
          <p className="nav-link">Features</p>
        </li>
        <li className="nav-item">
          <p className="nav-link">Pricing</p>
        </li>
        <li className="nav-item dropdown">
          <p className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </p>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><p className="dropdown-item">Action</p></li>
            <li><p className="dropdown-item">Another action</p></li>
            <li><p className="dropdown-item">Something else here</p></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header