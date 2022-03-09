import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
import AddStudent from './components/AddStudent';
import Errorpage from './components/Errorpage';
import './App.css';


 
class App extends Component {
  render() {
    return (
       <Router>
        
           <div className="App">
            <Navbar />
             
           <Switch>
                 <Route exact path='/'>  <Home /> </Route>
                 <Route exact path='/about'>  <About /> </Route>
                 <Route exact path='/add'> <AddStudent />  </Route>
                <Route> <Errorpage />  </Route>
                   </Switch>
          </div>
      
       </Router>
   );
  }
}
 
export default App;
