import "./App.css";
import MainGame from "./pages/MainGame";
import PostGame from "./pages/PostGame"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Timer /> */}
      <>
      <MainGame />
      {/* <PostGame /> */}
        </>{/* <Router>
<Switch>
  <Route path="/">
    <MainGame />
  </Route>
  <Route path="/endgame">
    <PostGame />
  </Route>
</Switch>

</Router> */}
    </div>


  );
}

export default App;
