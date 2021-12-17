import React from 'react';
import './App.css';

import { Header, HowItWorks, WhyUs, Features } from './containers';
import { Navbar } from './Components';

export const App = () => {
  return (
    <div className='App'>
      <div className=''>
        <Navbar />
        <Header />
      </div>
      <HowItWorks />
      <WhyUs />
      <Features />
    </div>
  )
}

export default App;