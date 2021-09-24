import './App.css';
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import {Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path='/' exact component={Home} />
      <Route path='/Contact' exact component={Contact}/>
    </div>
  );
}

export default App;
