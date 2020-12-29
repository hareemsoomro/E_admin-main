import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firebase from "../../config/config";
// const Users = () => {
export default function History() {
  const [History, setHistory] = useState("");
  useEffect(() => {
    const getUser = firebase.database().ref("Booking");
    getUser.on("value", (snapshot) => {
      const users = snapshot.val();
      const History = [];
      for (let id in users) {
        History.push(users[id]);
      }
      console.log(History);
      setHistory(History);
    });
  }, []);

  // const [title, setTitle] = useState("");

  // const handleChange = (e) => {
  //   setTitle(e.target.value);
  // };

  // const createTodo = () => {
  //   const todoRef = firebase.database().ref("todo");
  //   const todo = {
  //     title,
  //     complete: false,
  //   };
  //   todoRef.push(todo);
  // };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     userList: [],
  //   };
  // }

  // componentDidMount() {
  //   const items = firebase.database().ref("users/");
  //   items.on("value", (dataSnap) => {
  //     if (dataSnap.val()) {
  //       this.setState({ userList: Object.values(dataSnap.val()) });
  //     }
  //   });
  // }
  // render() {
  // const userItems = this.state.userList.map((item, index) => {
  //   return (
  //     <ListItem key={index}>
  //       <Text style={{ marginRight: 100 }}>{index.name}</Text>
  //       {/* <Text>Added by {item.user}</Text> */}
  //     </ListItem>
  //   );
  // });
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
            {/* sidebar menu end*/}
          </div>
        </aside>
        {/*main content start*/}
        <section id="main-content">
          <section className="wrapper">
            <div className="row">
              <div className="col-lg-12">
                <h3 className="page-header">
                  <i className="fa fa-history" /> History
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
                    User
                  </li>
                  <li>
                    <i className="fa fa-th-list" />
                    History
                  </li>
                </ol>
              </div>
            </div>
            {/* page start*/}
            <div className="row">
              <div className="col">
                <section className="panel">
                  <header className="panel-heading">History Table</header>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Visit</th>
                        <th>Username</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {History
                        ? History.map((user, index) => (
                            <tr>
                              <td>
                                {" "}
                                <text>{user.visit}</text>
                              </td>
                              <td>
                                <text>{user.user}</text>
                              </td>
                            </tr>
                          ))
                        : ""}

                      {/* <td>
                          {" "}
                          {History
                            ? History.map((user, index) => (
                                <text>{user.user}</text>
                              ))
                            : ""}
                        </td>
                        <td>
                          {" "}
                          {History
                            ? History.map((user, index) => (
                                <text>{user.date}</text>
                              ))
                            : ""}
                        </td>  */}

                      {/* <tr>
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
                      </tr> */}
                      {/* <tr>
                        <td>
                          {/*============= list ============== */}
                      {/* <List>{userItems}</List> */}
                      {/* </td>
                      </tr> */}
                    </tbody>
                  </table>
                </section>
              </div>
              {/* <div className="col-sm-6">
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
                      <tr></tr>
                    </tbody>
                  </table>
                </section>
              </div> */}
            </div>

            {/* page end*/}
          </section>
        </section>
      </section>
    </div>
  );
}

// export default Users;
