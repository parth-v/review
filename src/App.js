import React, { useState } from 'react';
import './App.css';
import UploadSection from './components/UploadSection';
import ViewSection from './components/ViewSection';

const App = () => {
  const [ route, setRoute ] = useState('');

  return (
    <div className="App">
      <h1>Welcome to Reviewer</h1>
      <button className="btn btn-primary" style={{margin: 10}} onClick = { () => setRoute('upload') }>Upload a new Publication</button>
      <br />
      <button className="btn btn-primary" style={{margin: 10}} onClick = { () => setRoute('view') }>View your Publications</button>
      <UploadSection />
      <ViewSection />
    </div>
  );
}

export default App;
