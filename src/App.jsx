import React from 'react'
import Header from './components/Header'
import ConversionForm from './components/ConversionForm'

const App = () => (
  <div className="flex items-center justify-center h-screen bg-[#f4e4ba] px-2 sm:px-0">
    <div className="bg-white p-8 rounded-xl w-full max-w-lg shadow-lg">
      <Header />
      <ConversionForm />
    </div>
  </div>
);

export default App;