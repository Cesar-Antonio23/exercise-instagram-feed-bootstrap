import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import Buttons from "./components/buttonGroup";
import Posts from "./pages/posts"
import AlonePosts from "./pages/alonePosts"


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Buttons />
      <Switch>
        <Route exact path='/' component={Posts}/>
        <Route exact path='/alonePosts' component={AlonePosts}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
