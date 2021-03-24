import React from 'react';
// Importing the Context Provider & Home Component
import MyContextProvider from './ui/MyContext';
import Home from './ui/Home'

function App() {
  return (
    <MyContextProvider>
        <Home/>
    </MyContextProvider>
  );
}

export default App;