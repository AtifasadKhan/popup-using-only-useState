import './App.css';
import NewData from './input/NewData';
import Dalal from './output/Dalal';
import { useState } from 'react';

const obj = [];
const App = () => {
  const [inputData, setData] = useState(obj);

  const retrieveDataFromNewdata = (data) => {
    setData((prevdata) => {
      return [data, ...prevdata];
    });
    // console.log(data);
  };

  return (
    <div className='App'>
      <h1>Enter Details</h1>
      <NewData retrieve={retrieveDataFromNewdata} />
      <Dalal obj={inputData} />
    </div>
  );
};

export default App;
