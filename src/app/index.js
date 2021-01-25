import React from 'react';
import background from '../images/bg.jpeg'
import Forex from '../Screens/Forex';

function App() {
  return (
   <div className="container" style={{backgroundImage: `url(${background})`}}>
     <div className="content-container">
        <Forex />
     </div>
   </div>
  );
}

export default App;
