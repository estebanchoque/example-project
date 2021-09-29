import { Switch, Route } from "react-router-dom";
import Login from "./components/Authentication/Login";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";

function App() {
  return (
    <Switch>
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
      </div>
    </Switch>
  );
}

export default App;
