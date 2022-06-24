import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import Home from './pages/Home';

function App() {
  const [customerData, setCustomerData] = useState(null);

  const getCustomerData = async () => {
    const response = await axios.get('http://localhost:8000/api/customers');
    setCustomerData(response.data);
  };
  useEffect(() => {
    getCustomerData();
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <div className={{ marginButtom: '20px' }}></div>
      <Routes>
        <Route exact path='/' element={<Home customerData={customerData} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
