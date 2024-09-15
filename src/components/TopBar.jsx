



function TopBar()


{
return(
<>

  
  <div className="m-2 position-relative">
    
      <nav className="nav navbar navbar-expand-lg m-2 fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand h1 glow-red" href="#hp">
            <span className="white">Genius</span>
            <span className="red">Gallery</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ms-auto mb-2">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#hp"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cm">
                  Contact Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pp">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#am">
                  About Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
    
   
  </div>
</>


)
}

export default TopBar