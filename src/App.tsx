import React from 'react';
import './App.css'; // Use this for global styles
import DataFilterMain from './components/DataFilter/DataFilterMain';
import DataFilterAssignmentMain from './components/DataFilterAssignment/DataFilterAssignmentMain';

function App() {
  return (
    <div className="App">
    
      <main>
        <DataFilterAssignmentMain />
      </main>
    </div>
  );
}

export default App;
