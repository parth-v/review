import React, { useState } from 'react';
import './App.css';
import UploadSection from './components/UploadSection';
import ViewSection from './components/ViewSection';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [ route, setRoute ] = useState('');

  return (
    <div className="App">
      <h1>Welcome to Reviewer</h1>
      <button className="btn btn-primary" style={{margin: 10}} onClick = { () => setRoute('upload') }>Upload a new Publication</button>
      <br />
      <button className="btn btn-primary" style={{margin: 10}} onClick = { () => setRoute('view') }>View your Publications</button>
      {route === 'upload' ? <UploadSection /> : null}
      {route === 'view' ? <ViewSection /> : null}
    </div>
  );
}

export default App;
