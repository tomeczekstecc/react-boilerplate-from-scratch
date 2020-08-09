import React from 'react';
import './styles/App.css';
import logo from './assets/img/prod_logotyp.png';

const App = () => {
  return (
    <div>
      <h1 className='text'>hello react1</h1>
      <img src={logo} alt='' />
    </div>
  );
};

export default App;
