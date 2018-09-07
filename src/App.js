import React, { Component } from 'react';
import AppHero from './components/AppHero';
import AppNavigation from './components/AppNavigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHero />
        <section>
          <AppNavigation />
        </section>
      </div>
    );
  }
}

export default App;
