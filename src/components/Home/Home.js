import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section id="container" className>
      {/*=============header start=================================================== */}
        <header className="header bg-success">
          <div className="toggle-nav">
            <div
              className="icon-reorder tooltips"
              data-original-title="Toggle Navigation"
              data-placement="bottom"
            >
              <i className="icon_menu" />
            </div>
          </div>
          {/*=============logo start=================================================== */}
          <a ComponentClass={Link} href="/Home" to="/Home" className="logo">
            E-VACCINE
          </a>
          {/*logo end===================================================*/} 
        </header>
        {/*header end ====================================*/}


        {/*sidebar start========================================================================*/}
        <aside>
          <div id="sidebar" className="nav-collapse ">
            {/* sidebar menu start*/}
            <ul className="sidebar-menu">
              <li className="active">
                <a className ComponentClass={Link} href="/Home" to="/Home">
                  <i className="icon_house_alt" />
                  <span>Dashboard</span>
                </a>
              </li>

              <li>
                <a className ComponentClass={Link} href="/Users" to="/Users">
                  <i className="far fa-user" />
                  <span>Users</span>
                </a>
              </li>
              <li>
                <a
                  className
                  ComponentClass={Link}
                  href="/Bookings"
                  to="/Bookings"
                >
                  <i class="far fa-calendar-check" />
                  <span>Bookings</span>
                </a>
              </li>
              <li>
                <a
                  className
                  ComponentClass={Link}
                  href="/History"
                  to="/History"
                >
                  <i className="fa fa-history" />
                  <span>History</span>
                </a>
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
                      href="/Errorfound"
                      to="/Errorfound"
                    >
                      404 Error
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {/* sidebar menu end========================================================================*/}
          </div>
        </aside>
        {/*sidebar end*/}
        {/*main content start*/}
        <section id="main-content">
          <section className="wrapper">
            {/*overview start*/}
            <div className="row">
              <div className="col-lg-12">
                <h3 className="page-header">
                  <i className="fa fa-laptop" /> Dashboard
                </h3>
                <ol className="breadcrumb">
                  <li>
                    <i className="fa fa-home" />
                    <a ComponentClass={Link} href="/Home" to="/Home">
                      Home
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-laptop" />
                    Dashboard
                  </li>
                </ol>
              </div>
            </div>
             {/*/============= boxes Row =======================*/}
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div className="info-box green-bg">
                  <i className="fa fa-download" />
                  <div className="count">6.674</div>
                  <div className="title">Download</div>
                </div>
              </div>
            
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div className="info-box green-bg">
                  <i className="fa fa-shopping-cart" />
                  <div className="count">7.538</div>
                  <div className="title">Purchased</div>
                </div>
              </div>
            
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div className="info-box green-bg">
                  <i className="fa fa-thumbs-o-up" />
                  <div className="count">4.362</div>
                  <div className="title">Order</div>
                </div>
              </div>
            
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div className="info-box green-bg">
                  <i className="fa fa-cubes" />
                  <div className="count">1.426</div>
                  <div className="title">Stock</div>
                </div>
              </div>
            </div>
            {/*/============= boxes Row End=======================*/}
            
            {/* ================ new row ============= */}
            <div className="row">
             {/* ================Registered Users from overall Pakistan============== */}
              <div className="col-lg-9 col-md-12">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h2>
                      <i className="fa fa-flag-o red" />
                      <strong>Registered Users from overall Pakistan</strong>
                    </h2>
                    <div className="panel-actions">
                      <a
                        ComponentClass={Link}
                        href="/Home#"
                        to="/Home#"
                        className="btn-setting"
                      >
                        <i className="fa fa-rotate-right" />
                      </a>
                      <a
                        ComponentClass={Link}
                        href="/Home#"
                        to="/Home#"
                        className="btn-minimize"
                      >
                        <i className="fa fa-chevron-up" />
                      </a>
                      <a
                        ComponentClass={Link}
                        href="/Home#"
                        to="/Home#"
                        className="btn-close"
                      >
                        <i className="fa fa-times" />
                      </a>
                    </div>
                  </div>
                  <div className="panel-body">
                    <table className="table bootstrap-datatable countries">
                      <thead>
                        <tr>
                          <th />
                          <th>Cities</th>
                          <th>Downloads</th>
                          <th>Online</th>
                          <th>Booking Purcahse</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            
                          </td>
                          <td>Karachi</td>
                          <td>2563</td>
                          <td>1025</td>
                          <td>
                            <div className="progress thin">
                              <div
                                className="progress-bar progress-bar-danger"
                                role="progressbar"
                                aria-valuenow={73}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "73%" }}
                              ></div>
                              <div
                                className="progress-bar progress-bar-warning"
                                role="progressbar"
                                aria-valuenow={27}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "27%" }}
                              ></div>
                            </div>
                            <span className="sr-only">73%</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                           
                          </td>
                          <td>Lahore</td>
                          <td>3652</td>
                          <td>2563</td>
                          <td>
                            <div className="progress thin">
                              <div
                                className="progress-bar progress-bar-danger"
                                role="progressbar"
                                aria-valuenow={57}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "57%" }}
                              ></div>
                              <div
                                className="progress-bar progress-bar-warning"
                                role="progressbar"
                                aria-valuenow={43}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "43%" }}
                              ></div>
                            </div>
                            <span className="sr-only">57%</span>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>Islamabad</td>
                          <td>562</td>
                          <td>452</td>
                          <td>
                            <div className="progress thin">
                              <div
                                className="progress-bar progress-bar-danger"
                                role="progressbar"
                                aria-valuenow={93}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "93%" }}
                              ></div>
                              <div
                                className="progress-bar progress-bar-warning"
                                role="progressbar"
                                aria-valuenow={7}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "7%" }}
                              ></div>
                            </div>
                            <span className="sr-only">93%</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            
                          </td>
                          <td>Multan</td>
                          <td>1258</td>
                          <td>958</td>
                          <td>
                            <div className="progress thin">
                              <div
                                className="progress-bar progress-bar-danger"
                                role="progressbar"
                                aria-valuenow={20}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "20%" }}
                              ></div>
                              <div
                                className="progress-bar progress-bar-warning"
                                role="progressbar"
                                aria-valuenow={80}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "80%" }}
                              ></div>
                            </div>
                            <span className="sr-only">20%</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            
                          </td>
                          <td>Sukkur</td>
                          <td>4856</td>
                          <td>3621</td>
                          <td>
                            <div className="progress thin">
                              <div
                                className="progress-bar progress-bar-danger"
                                role="progressbar"
                                aria-valuenow={20}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "20%" }}
                              ></div>
                              <div
                                className="progress-bar progress-bar-warning"
                                role="progressbar"
                                aria-valuenow={80}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "80%" }}
                              ></div>
                            </div>
                            <span className="sr-only">20%</span>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>Balochistan</td>
                          <td>265</td>
                          <td>102</td>
                          <td>
                            <div className="progress thin">
                              <div
                                className="progress-bar progress-bar-danger"
                                role="progressbar"
                                aria-valuenow={20}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "20%" }}
                              ></div>
                              <div
                                className="progress-bar progress-bar-warning"
                                role="progressbar"
                                aria-valuenow={80}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "80%" }}
                              ></div>
                            </div>
                            <span className="sr-only">20%</span>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>Peshawar</td>
                          <td>265</td>
                          <td>102</td>
                          <td>
                            <div className="progress thin">
                              <div
                                className="progress-bar progress-bar-danger"
                                role="progressbar"
                                aria-valuenow={20}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "20%" }}
                              ></div>
                              <div
                                className="progress-bar progress-bar-warning"
                                role="progressbar"
                                aria-valuenow={80}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "80%" }}
                              ></div>
                            </div>
                            <span className="sr-only">20%</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
               {/* ================Registered Users from overall Pakistan End ============== */}

               {/* ================ Social Boxes ============== */}           
              <div className="col-md-3">
                <div className="social-box facebook">
                  <i className="fa fa-facebook" />
                  <ul>
                    <li>
                      <strong>256k</strong>
                      <span>friends</span>
                    </li>
                    <li>
                      <strong>359</strong>
                      <span>feeds</span>
                    </li>
                  </ul>
                </div>
                {/*/social-box*/}
              
                <div className="social-box google-plus">
                  <i className="fa fa-google-plus" />
                  <ul>
                    <li>
                      <strong>962</strong>
                      <span>followers</span>
                    </li>
                    <li>
                      <strong>256</strong>
                      <span>circles</span>
                    </li>
                  </ul>
                </div>
              
            
                <div className="social-box twitter">
                  <i className="fa fa-twitter" />
                  <ul>
                    <li>
                      <strong>1562k</strong>
                      <span>followers</span>
                    </li>
                    <li>
                      <strong>2562</strong>
                      <span>tweets</span>
                    </li>
                  </ul>
                </div>
              </div>
               {/* ================ Social Boxes ============== */}
            </div>
            {/* ================Row end============== */}
          </section>
        </section>
        {/*main content end*/}
      </section>
    </div>
  );
};

export default Home;
