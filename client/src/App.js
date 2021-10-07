import { Route } from "react-router-dom";
import Login from "./components/Authentication/Login";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";
import Info from "./components/Info/Info";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/info" component={Info} />
    </div>
  );
}

export default App;
