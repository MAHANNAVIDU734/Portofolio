import './App.css';
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Myprojects from "./components/Myprojects/Myprojects";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="App">
    <Router>
    <Header />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/contact' component={Contact} />
      <Route path='/myprojects' component={Myprojects} />
    </Switch>
    </Router>
    </div>
  );
}

export default App;
