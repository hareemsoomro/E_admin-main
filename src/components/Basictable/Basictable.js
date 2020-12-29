import React from "react";
import { Link } from "react-router-dom";

const Basictable = () => {
  return (
    <div>
      <section id="container" className>
        {/*header start*/}
        <header className="header dark-bg">
          <div className="toggle-nav">
            <div
              className="icon-reorder tooltips"
              data-original-title="Toggle Navigation"
              data-placement="bottom"
            >
              <i className="icon_menu" />
            </div>
          </div>
          {/*logo start*/}
          <a ComponentClass={Link} href="/Home" to="/Home" className="logo">
            Nice <span className="lite">Admin</span>
          </a>
          {/*logo end*/}
          <div className="nav search-row" id="top_menu">
            {/*  search form start */}
            <ul className="nav top-menu">
              <li>
                <form className="navbar-form">
                  <input
                    className="form-control"
                    placeholder="Search"
                    type="text"
                  />
                </form>
              </li>
            </ul>
            {/*  search form end */}
          </div>
          <div className="top-nav notification-row">
            {/* notificatoin dropdown start*/}
            <ul className="nav pull-right top-menu">
              {/* task notificatoin start */}
              <li id="task_notificatoin_bar" className="dropdown">
                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                  <i className="icon-task-l" />
                  <span className="badge bg-important">5</span>
                </a>
                <ul className="dropdown-menu extended tasks-bar">
                  <div className="notify-arrow notify-arrow-blue" />
                  <li>
                    <p className="blue">You have 5 pending tasks</p>
                  </li>
                  <li>
                    <a href="#">
                      <div className="task-info">
                        <div className="desc">Design PSD </div>
                        <div className="percent">90%</div>
                      </div>
                      <div className="progress progress-striped">
                        <div
                          className="progress-bar progress-bar-success"
                          role="progressbar"
                          aria-valuenow={90}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "90%" }}
                        >
                          <span className="sr-only">
                            90% Complete (success)
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="task-info">
                        <div className="desc">Project 1</div>
                        <div className="percent">30%</div>
                      </div>
                      <div className="progress progress-striped">
                        <div
                          className="progress-bar progress-bar-warning"
                          role="progressbar"
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "30%" }}
                        >
                          <span className="sr-only">
                            30% Complete (warning)
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="task-info">
                        <div className="desc">Digital Marketing</div>
                        <div className="percent">80%</div>
                      </div>
                      <div className="progress progress-striped">
                        <div
                          className="progress-bar progress-bar-info"
                          role="progressbar"
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "80%" }}
                        >
                          <span className="sr-only">80% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="task-info">
                        <div className="desc">Logo Designing</div>
                        <div className="percent">78%</div>
                      </div>
                      <div className="progress progress-striped">
                        <div
                          className="progress-bar progress-bar-danger"
                          role="progressbar"
                          aria-valuenow={78}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "78%" }}
                        >
                          <span className="sr-only">78% Complete (danger)</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="task-info">
                        <div className="desc">Mobile App</div>
                        <div className="percent">50%</div>
                      </div>
                      <div className="progress progress-striped active">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "50%" }}
                        >
                          <span className="sr-only">50% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="external">
                    <a href="#">See All Tasks</a>
                  </li>
                </ul>
              </li>
              {/* task notificatoin end */}
              {/* inbox notificatoin start*/}
              <li id="mail_notificatoin_bar" className="dropdown">
                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                  <i className="icon-envelope-l" />
                  <span className="badge bg-important">5</span>
                </a>
                <ul className="dropdown-menu extended inbox">
                  <div className="notify-arrow notify-arrow-blue" />
                  <li>
                    <p className="blue">You have 5 new messages</p>
                  </li>
                  <li>
                    <a href="#">
                      <span className="photo">
                        <img alt="avatar" src="./img/avatar-mini.jpg" />
                      </span>
                      <span className="subject">
                        <span className="from">Greg Martin</span>
                        <span className="time">1 min</span>
                      </span>
                      <span className="message">
                        I really like this admin panel.
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="photo">
                        <img alt="avatar" src="./img/avatar-mini2.jpg" />
                      </span>
                      <span className="subject">
                        <span className="from">Bob Mckenzie</span>
                        <span className="time">5 mins</span>
                      </span>
                      <span className="message">
                        Hi, What is next project plan?
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="photo">
                        <img alt="avatar" src="./img/avatar-mini3.jpg" />
                      </span>
                      <span className="subject">
                        <span className="from">Phillip Park</span>
                        <span className="time">2 hrs</span>
                      </span>
                      <span className="message">
                        I am like to buy this Admin Template.
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="photo">
                        <img alt="avatar" src="./img/avatar-mini4.jpg" />
                      </span>
                      <span className="subject">
                        <span className="from">Ray Munoz</span>
                        <span className="time">1 day</span>
                      </span>
                      <span className="message">Icon fonts are great.</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">See all messages</a>
                  </li>
                </ul>
              </li>
              {/* inbox notificatoin end */}
              {/* alert notification start*/}
              <li id="alert_notificatoin_bar" className="dropdown">
                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                  <i className="icon-bell-l" />
                  <span className="badge bg-important">7</span>
                </a>
                <ul className="dropdown-menu extended notification">
                  <div className="notify-arrow notify-arrow-blue" />
                  <li>
                    <p className="blue">You have 4 new notifications</p>
                  </li>
                  <li>
                    <a href="#">
                      <span className="label label-primary">
                        <i className="icon_profile" />
                      </span>
                      Friend Request
                      <span className="small italic pull-right">5 mins</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="label label-warning">
                        <i className="icon_pin" />
                      </span>
                      John location.
                      <span className="small italic pull-right">50 mins</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="label label-danger">
                        <i className="icon_book_alt" />
                      </span>
                      Project 3 Completed.
                      <span className="small italic pull-right">1 hr</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="label label-success">
                        <i className="icon_like" />
                      </span>
                      Mick appreciated your work.
                      <span className="small italic pull-right"> Today</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">See all notifications</a>
                  </li>
                </ul>
              </li>
              {/* alert notification end*/}
              {/* user login dropdown start*/}
              <li className="dropdown">
                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                  <span className="profile-ava">
                    <img alt="" src="img/avatar1_small.jpg" />
                  </span>
                  <span className="username">Jenifer Smith</span>
                  <b className="caret" />
                </a>
                <ul className="dropdown-menu extended logout">
                  <div className="log-arrow-up" />
                  <li className="eborder-top">
                    <a href="#">
                      <i className="icon_profile" /> My Profile
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_mail_alt" /> My Inbox
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_clock_alt" /> Timeline
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_chat_alt" /> Chats
                    </a>
                  </li>
                  <li>
                    <a ComponentClass={Link} href="/Loginform" to="/Loginform">
                      <i className="icon_key_alt" /> Log Out
                    </a>
                  </li>
                </ul>
              </li>
              {/* user login dropdown end */}
            </ul>
            {/* notificatoin dropdown end*/}
          </div>
        </header>
        {/*header end*/}
        {/*sidebar start*/}
        <aside>
          <div id="sidebar" className="nav-collapse ">
            {/* sidebar menu start*/}
            <ul className="sidebar-menu">
              <li className>
                <a className ComponentClass={Link} href="/Home" to="/Home">
                  <i className="icon_house_alt" />
                  <span>Dashboard</span>
                </a>
              </li>

              <li className="sub-menu">
                <a href="javascript:;" className>
                  <i className="icon_desktop" />
                  <span>UI Fitures</span>
                  <span className="menu-arrow arrow_carrot-right" />
                </a>
                <ul className="sub">
                  <li>
                    <a
                      className
                      ComponentClass={Link}
                      href="/General"
                      to="/General"
                    >
                      Components
                    </a>
                  </li>
                  <li>
                    <a
                      className
                      ComponentClass={Link}
                      href="/Buttons"
                      to="/Buttons"
                    >
                      Buttons
                    </a>
                  </li>
                  <li>
                    <a
                      className
                      ComponentClass={Link}
                      href="/Grids"
                      to="/Grids"
                    >
                      Grids
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className ComponentClass={Link} href="/Users" to="/Users">
                  <i className="icon_genius" />
                  <span>Users</span>
                </a>
              </li>

              <li className="sub-menu">
                <a href="javascript:;" className>
                  <i className="icon_table" />
                  <span>Tables</span>
                  <span className="menu-arrow arrow_carrot-right" />
                </a>
                <ul className="sub">
                  <li>
                    <a
                      className="active"
                      ComponentClass={Link}
                      href="/Basictable"
                      to="/Basictable"
                    >
                      Basic Table
                    </a>
                  </li>
                  <li>
                    <a
                      className
                      ComponentClass={Link}
                      href="/Responsivetable"
                      to="/Responsivetable"
                    >
                      Responsive Table
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sub-menu">
                <a href="javascript:;" className>
                  <i className="icon_documents_alt" />
                  <span>Pages</span>
                  <span className="menu-arrow arrow_carrot-right" />
                </a>
                <ul className="sub">
                  <li>
                    <a
                      className
                      ComponentClass={Link}
                      href="/Profile"
                      to="/Profile"
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      className
                      ComponentClass={Link}
                      href="/Loginform"
                      to="/Loginform"
                    >
                      <span>Login Page</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className
                      ComponentClass={Link}
                      href="/Contactform"
                      to="/Contactform"
                    >
                      <span>Contact Page</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className
                      ComponentClass={Link}
                      href="/Blank"
                      to="/Blank"
                    >
                      Blank Page
                    </a>
                  </li>
                  <li>
                    <a
                      className
                      ComponentClass={Link}
                      href="/Errorfound"
                      to="/Errorfound"
                    >
                      404 Error
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {/* sidebar menu end*/}
          </div>
        </aside>
        {/*main content start*/}
        <section id="main-content">
          <section className="wrapper">
            <div className="row">
              <div className="col-lg-12">
                <h3 className="page-header">
                  <i className="fa fa-table" /> Table
                </h3>
                <ol className="breadcrumb">
                  <li>
                    <i className="fa fa-home" />
                    <a ComponentClass={Link} href="/Home" to="/Home">
                      Home
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-table" />
                    Table
                  </li>
                  <li>
                    <i className="fa fa-th-list" />
                    Basic Table
                  </li>
                </ol>
              </div>
            </div>
            {/* page start*/}
            <div className="row">
              <div className="col-sm-6">
                <section className="panel">
                  <header className="panel-heading">Basic Table</header>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </section>
              </div>
              <div className="col-sm-6">
                <section className="panel">
                  <header className="panel-heading">Striped Table</header>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </section>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <section className="panel">
                  <header className="panel-heading no-border">
                    Border Table
                  </header>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td rowSpan={2}>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@TwBootstrap</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </section>
              </div>
              <div className="col-sm-6">
                <section className="panel">
                  <header className="panel-heading">Hover Table</header>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Sumon</td>
                        <td>Mosa</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </section>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <section className="panel">
                  <header className="panel-heading">Condensed table</header>
                  <table className="table table-condensed">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Ajay Patel</td>
                        <td>LA</td>
                        <td>@ajaypatel_aj</td>
                      </tr>
                    </tbody>
                  </table>
                </section>
              </div>
              <div className="col-sm-6">
                <section className="panel">
                  <header className="panel-heading">Contextual classes</header>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Column heading</th>
                        <th>Column heading</th>
                        <th>Column heading</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="active">
                        <td>1</td>
                        <td>Column content</td>
                        <td>Column content</td>
                        <td>Column content</td>
                      </tr>
                      <tr className="success">
                        <td>2</td>
                        <td>Column content</td>
                        <td>Column content</td>
                        <td>Column content</td>
                      </tr>
                      <tr className="warning">
                        <td>3</td>
                        <td>Column content</td>
                        <td>Column content</td>
                        <td>Column content</td>
                      </tr>
                      <tr className="danger">
                        <td>4</td>
                        <td>Column content</td>
                        <td>Column content</td>
                        <td>Column content</td>
                      </tr>
                    </tbody>
                  </table>
                </section>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <section className="panel">
                  <header className="panel-heading">Responsive tables</header>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Table heading</th>
                          <th>Table heading</th>
                          <th>Table heading</th>
                          <th>Table heading</th>
                          <th>Table heading</th>
                          <th>Table heading</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <section className="panel">
                  <header className="panel-heading">Advanced Table</header>
                  <table className="table table-striped table-advance table-hover">
                    <tbody>
                      <tr>
                        <th>
                          <i className="icon_profile" /> Full Name
                        </th>
                        <th>
                          <i className="icon_calendar" /> Date
                        </th>
                        <th>
                          <i className="icon_mail_alt" /> Email
                        </th>
                        <th>
                          <i className="icon_pin_alt" /> City
                        </th>
                        <th>
                          <i className="icon_mobile" /> Mobile
                        </th>
                        <th>
                          <i className="icon_cogs" /> Action
                        </th>
                      </tr>
                      <tr>
                        <td>Angeline Mcclain</td>
                        <td>2004-07-06</td>
                        <td>dale@chief.info</td>
                        <td>Rosser</td>
                        <td>176-026-5992</td>
                        <td>
                          <div className="btn-group">
                            <a className="btn btn-primary" href="#">
                              <i className="icon_plus_alt2" />
                            </a>
                            <a className="btn btn-success" href="#">
                              <i className="icon_check_alt2" />
                            </a>
                            <a className="btn btn-danger" href="#">
                              <i className="icon_close_alt2" />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Sung Carlson</td>
                        <td>2011-01-10</td>
                        <td>ione.gisela@high.org</td>
                        <td>Robert Lee</td>
                        <td>724-639-4784</td>
                        <td>
                          <div className="btn-group">
                            <a className="btn btn-primary" href="#">
                              <i className="icon_plus_alt2" />
                            </a>
                            <a className="btn btn-success" href="#">
                              <i className="icon_check_alt2" />
                            </a>
                            <a className="btn btn-danger" href="#">
                              <i className="icon_close_alt2" />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Bryon Osborne</td>
                        <td>2006-10-29</td>
                        <td>sol.raleigh@language.edu</td>
                        <td>York</td>
                        <td>180-456-0056</td>
                        <td>
                          <div className="btn-group">
                            <a className="btn btn-primary" href="#">
                              <i className="icon_plus_alt2" />
                            </a>
                            <a className="btn btn-success" href="#">
                              <i className="icon_check_alt2" />
                            </a>
                            <a className="btn btn-danger" href="#">
                              <i className="icon_close_alt2" />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Dalia Marquez</td>
                        <td>2011-12-15</td>
                        <td>angeline.frieda@thick.com</td>
                        <td>Alton</td>
                        <td>690-601-1922</td>
                        <td>
                          <div className="btn-group">
                            <a className="btn btn-primary" href="#">
                              <i className="icon_plus_alt2" />
                            </a>
                            <a className="btn btn-success" href="#">
                              <i className="icon_check_alt2" />
                            </a>
                            <a className="btn btn-danger" href="#">
                              <i className="icon_close_alt2" />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Selina Fitzgerald</td>
                        <td>2003-01-06</td>
                        <td>moshe.mikel@parcelpart.info</td>
                        <td>Waelder</td>
                        <td>922-810-0915</td>
                        <td>
                          <div className="btn-group">
                            <a className="btn btn-primary" href="#">
                              <i className="icon_plus_alt2" />
                            </a>
                            <a className="btn btn-success" href="#">
                              <i className="icon_check_alt2" />
                            </a>
                            <a className="btn btn-danger" href="#">
                              <i className="icon_close_alt2" />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Abraham Avery</td>
                        <td>2006-07-14</td>
                        <td>harvey.jared@pullpump.org</td>
                        <td>Harker Heights</td>
                        <td>511-175-7115</td>
                        <td>
                          <div className="btn-group">
                            <a className="btn btn-primary" href="#">
                              <i className="icon_plus_alt2" />
                            </a>
                            <a className="btn btn-success" href="#">
                              <i className="icon_check_alt2" />
                            </a>
                            <a className="btn btn-danger" href="#">
                              <i className="icon_close_alt2" />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Caren Mcdowell</td>
                        <td>2002-03-29</td>
                        <td>valeria@hookhope.org</td>
                        <td>Blackwell</td>
                        <td>970-147-5550</td>
                        <td>
                          <div className="btn-group">
                            <a className="btn btn-primary" href="#">
                              <i className="icon_plus_alt2" />
                            </a>
                            <a className="btn btn-success" href="#">
                              <i className="icon_check_alt2" />
                            </a>
                            <a className="btn btn-danger" href="#">
                              <i className="icon_close_alt2" />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Owen Bingham</td>
                        <td>2013-04-06</td>
                        <td>thomas.christopher@firstfish.info</td>
                        <td>Rule</td>
                        <td>934-118-6046</td>
                        <td>
                          <div className="btn-group">
                            <a className="btn btn-primary" href="#">
                              <i className="icon_plus_alt2" />
                            </a>
                            <a className="btn btn-success" href="#">
                              <i className="icon_check_alt2" />
                            </a>
                            <a className="btn btn-danger" href="#">
                              <i className="icon_close_alt2" />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Ahmed Dean</td>
                        <td>2008-03-19</td>
                        <td>lakesha.geri.allene@recordred.com</td>
                        <td>Darrouzett</td>
                        <td>338-081-8817</td>
                        <td>
                          <div className="btn-group">
                            <a className="btn btn-primary" href="#">
                              <i className="icon_plus_alt2" />
                            </a>
                            <a className="btn btn-success" href="#">
                              <i className="icon_check_alt2" />
                            </a>
                            <a className="btn btn-danger" href="#">
                              <i className="icon_close_alt2" />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Mario Norris</td>
                        <td>2010-02-08</td>
                        <td>mildred@hour.info</td>
                        <td>Amarillo</td>
                        <td>945-547-5302</td>
                        <td>
                          <div className="btn-group">
                            <a className="btn btn-primary" href="#">
                              <i className="icon_plus_alt2" />
                            </a>
                            <a className="btn btn-success" href="#">
                              <i className="icon_check_alt2" />
                            </a>
                            <a className="btn btn-danger" href="#">
                              <i className="icon_close_alt2" />
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </section>
              </div>
            </div>
            {/* page end*/}
          </section>
        </section>
      </section>
    </div>
  );
};

export default Basictable;
