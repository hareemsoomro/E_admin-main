import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Basictable from "./components/Basictable/Basictable";
import Users from "./components/Users/Users";
import Bookings from "./components/Bookings/Bookings";
import History from "./components/History/History";
import Profile from "./components/Profile/Profile";
import Loginform from "./components/Loginform/Loginform";
import Registrationform from "./components/Registrationform/Registerform";
// import firebase from "firebase";
// // Initialize Firebase
// import { firebaseConfig } from "./components/config";

// if (!firebase.app.length) {
//   firebase.initializeApp(firebaseConfig);
// }

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/Loginform" component={Loginform} />
          <Route exact path="/Basictable" component={Basictable} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Registrationform" component={Registrationform} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Users" component={Users} />
          <Route exact path="/Bookings" component={Bookings} />
          <Route exact path="/History" component={History} />
        </div>
      </Router>
    );
  }
}
export default App;
