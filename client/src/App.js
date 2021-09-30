import { Route } from "react-router-dom";
import Login from "./components/Authentication/Login";
import SignUp from "./components/SignUp/SignUp";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavBar} />
      <Route path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
    </div>
  );
}

export default App;
