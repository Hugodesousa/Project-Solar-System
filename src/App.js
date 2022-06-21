import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <Header />
        <SolarSystem />
        <Missions />
      </div>
    // <p>Sistema Solar</p>
    );
  }
}

export default App;
