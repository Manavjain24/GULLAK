import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.post('http://localhost:5000/data', { query: input });
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="App">
      <h1>Finance Management Dashboard</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter financial query"
      />
      <button onClick={fetchData}>Submit</button>
      <div>
        <h2>Financial Data</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;


