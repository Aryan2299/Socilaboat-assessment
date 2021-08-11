import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import dummyUser from "./utils/static/DummyUser";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <nav></nav>
        <Switch>
          <Route path="/">
            <UserProfile user={dummyUser} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
