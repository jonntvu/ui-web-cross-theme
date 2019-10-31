import React, {  } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import ThuVien from './pages/ThuVien.jsx';
import BanNganh from './pages/BanNganh.jsx';
import Event from './pages/Event.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/ThuVien" component={ThuVien} />
        <Route path="/BanNganh" component={BanNganh} />
        <Route path="/Event" component={Event} />
      </div>
    </Router>
  );

}

export default App;
