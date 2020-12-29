import React from "react";

import { Link } from "react-router-dom";

const Contactform = () => {
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
              <li>
                <a
                  className
                  ComponentClass={Link}
                  href="/Widgets"
                  to="/Widgets"
                >
                  <i className="icon_genius" />
                  <span>Widgets</span>
                </a>
              </li>
              <li>
                <a
                  className
                  ComponentClass={Link}
                  href="/Gallery"
                  to="/Gallery"
                >
                  <i className="fas fa-images" />
                  <span>Gallery</span>
                </a>
              </li>
              <li>
                <a
                  className
                  ComponentClass={Link}
                  href="/Chartjs"
                  to="/Chartjs"
                >
                  <i className="icon_piechart" />
                  <span>Charts</span>
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
                      className
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
              <li className="sub-menu ">
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
              <li className="sub-menu">
                <a href="javascript:;" className>
                  <i className="fas fa-mail-bulk" />
                  <span>Mail</span>
                  <span className="menu-arrow arrow_carrot-right" />
                </a>
                <ul className="sub">
                  <li>
                    <a className ComponentClass={Link} href="/Mail" to="/Mail">
                      Inbox
                    </a>
                  </li>
                  <li>
                    <a
                      className
                      ComponentClass={Link}
                      href="/Compose"
                      to="/Compose"
                    >
                      <span>Compose Mail</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {/* sidebar menu end*/}
          </div>
        </aside>
        {/*sidebar end*/}
        {/*main content start*/}
        <section id="main-content">
          <section className="wrapper">
            <div className="row">
              <div className="col-lg-12">
                <h3 className="page-header">
                  <i className="fa fa fa-bars" /> Pages
                </h3>
                <ol className="breadcrumb">
                  <li>
                    <i className="fa fa-home" />
                    <a ComponentClass={Link} href="/Home" to="/Home">
                      Home
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-bars" />
                    Pages
                  </li>
                  <li>
                    <i className="fa fa-square-o" />
                    Contact{" "}
                  </li>
                </ol>
              </div>
            </div>
            {/* page start*/}
            <div className="row">
              <div className="col-lg-6">
                <div className="recent">
                  <h3>Send us a message</h3>
                </div>
                <div id="sendmessage">
                  Your message has been sent. Thank you!
                </div>
                <div id="errormessage" />
                <form action method="post" role="form" className="contactForm">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div className="validation" />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                    <div className="validation" />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 8 chars of subject"
                    />
                    <div className="validation" />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={5}
                      data-rule="required"
                      data-msg="Please write something for us"
                      placeholder="Message"
                      defaultValue={""}
                    />
                    <div className="validation" />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-6">
                <div className="recent">
                  <h3>Get in touch with us</h3>
                </div>
                <div className>
                  <p>
                    Nam liber tempor cum soluta nobis eleifend option congue
                    nihil imperdiet doming id quod mazim placerat facer possim
                    assum. Typi non habent claritatem insitam; est usus legentis
                    in iis qui facit eorum.
                  </p>
                  <p>
                    Nam liber tempor cum soluta nobis eleifend option congue
                    nihil imperdiet doming id quod mazim placerat facer possim
                    assum. Typi non habent claritatem insitam; est usus legentis
                    in iis qui facit eorum.
                  </p>
                  <h4>Address:</h4>Little Lonsdale St, New York
                  <br />
                  <h4>Telephone:</h4>345 578 59 45 416
                  <br />
                  <h4>Fax:</h4>123 456 789
                </div>
              </div>
            </div>
            {/* page end*/}
          </section>
        </section>
      </section>
    </div>
  );
};

export default Contactform;
