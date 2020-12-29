import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Link } from "react-router-dom";
import firebase from "../../config/config";
// const Users = () => {
export default function Bookings() {
  const [Bookings, setBookings] = useState("");
  useEffect(() => {
    const getBook = firebase.database().ref("Booking");
    getBook.on("value", (snapshot) => {
      const users = snapshot.val();
      const Bookings = [];
      for (let id in users) {
        Bookings.push(users[id]);
      }
      console.log(Bookings);
      setBookings(Bookings);
    });
  }, []);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    const msgRef = firebase.database().ref("trip");
    const msg = {
      message,
    };
    msgRef.push(msg);
  };

  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  // const createTodo = () => {
  //   const todoRef = firebase.database().ref("trip");
  //   const todo = {
  //     title,
  //     complete: false
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
                  <i class="far fa-calendar-check" /> Bookings
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
                    Bookings
                  </li>
                </ol>
              </div>
            </div>
            {/* page start*/}
            <div className="row">
              <div className="col-sm-12">
                <section className="panel">
                  <header className="panel-heading">Booking Table</header>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Child Fname</th>
                        <th>Child Lname</th>
                        <th>Visit</th>
                        <th>Guardian Contact</th>
                        <th>Slot</th>
                        <th>Address</th>
                        <th>Date</th>
                        <th>Hospital</th>
                        <th>Response</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/****************************** booking call *******************/}

                      {Bookings
                        ? Bookings.map((book, index) => (
                            <tr>
                              <td>1</td>
                              <td>
                                <text>{book.user}</text>
                              </td>
                              <td>
                                <text>{book.Child_fname}</text>
                              </td>
                              <td>
                                <text>{book.Child_lname}</text>
                              </td>
                              <td>
                                <text>{book.visit}</text>
                              </td>
                              <td>
                                <text>{book.Guardia_contact}</text>
                              </td>
                              <td>
                                <text>{book.Slot}</text>
                              </td>
                              <td>
                                <text>{book.address}</text>
                              </td>
                              <td>
                                <text>{book.date}</text>
                              </td>
                              <td>
                                <text>{book.hospital}</text>
                              </td>
                              <td>
                                <div>
                                  <Button
                                    variant="contained"
                                    class="btn btn-success btn-lg"
                                    onClick={handleClickOpen}
                                  >
                                    Send Response
                                  </Button>
                                  <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="form-dialog-title"
                                  >
                                    <DialogTitle id="form-dialog-title">
                                      Confirmation Message
                                    </DialogTitle>
                                    <DialogContent>
                                      <DialogContentText>
                                        The response is showing booking
                                        Confirmation or rejection reason
                                      </DialogContentText>
                                      <TextField
                                        autoFocus
                                        style={{ fontSize: 50 }}
                                        margin="dense"
                                        id="name"
                                        label="Message"
                                        type="text"
                                        fullWidth
                                        onChange={handleChange}
                                        value={message}
                                      />
                                    </DialogContent>
                                    <DialogActions>
                                      {/* <Button onClick={handleClose} color="primary">
                                  Cancel
                                </Button> */}
                                      <Button
                                        onClick={handleClose}
                                        class="btn btn-success btn-lg"
                                      >
                                        SEND
                                      </Button>
                                    </DialogActions>
                                  </Dialog>
                                </div>
                              </td>
                            </tr>
                          ))
                        : ""}

                      {/* </tr>

                      <tr>
                        <td>
                          {/*============= list ============== */}
                      {/* <List>{userItems}</List> */}
                      {/* </td>
                      </tr> */}
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
}

// export default Users;
