import './App.css';
import LeftBar from './components/LeftBar'
import RightContent from './components/RightContent'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Site from './components/Site';
import Logs from './components/Logs';
import Dashboard from './components/Dashboard';

function App() {
    return (
      <Router>
            <div className="App">
                
                <Route exact path="/Home" component={Home} />
                <Route exact path="/" component={LeftBar} />
                <Route exact path="/" component={RightContent} />
                <Route exact path="/Site" component={Site} />   
                <Route exact path="/Logs" component={Logs} /> 
                <Route exact path="/Dashboard" component={Dashboard} /> 
            </div>
            </Router>
  );
}

export default App;
