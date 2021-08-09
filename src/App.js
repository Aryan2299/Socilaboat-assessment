import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserProfileHeader from "./components/UserProfileHeader";
import dummyUser from "./utils/static/DummyUser";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <nav></nav>
        <Switch>
          <Route path="/">
            <UserProfileHeader user={dummyUser} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
