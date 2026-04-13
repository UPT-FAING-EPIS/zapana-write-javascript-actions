function NavigationMenu() {
  return (
    <nav className="navbar navbar-expand-lg brand-navbar sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold text-primary" href="#dashboard">
          Zapana UI
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#topNav"
          aria-controls="topNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="topNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#dashboard">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#form">
                Form
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#resources">
                Resources
              </a>
            </li>
          </ul>
          <a className="btn btn-outline-primary ms-lg-3" href="#report">
            View Report
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavigationMenu;
