/*import { Location } from "./location";

function App() {
  return (
    <div className="app">
      <h1>Find Location</h1>
      <p>Welcome to the home page!</p>
      <input type="text" placeholder="Enter location name" className="search" />
      <table border={1} cellSpacing={0} cellPadding={14}>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Address</th>
            <th>Is Permanent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>Office</td>
            <td>Surabaya</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>Rumah Adi</td>
            <td>Semarang</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>Kantor Kelurahan</td>
            <td>Blora, Jawa Tengah</td>
            <td>No</td>
          </tr>
          <tr>
            <td>4.</td>
            <td>Kantor DPRD</td>
            <td>Jakarta Timur</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>5.</td>
            <td>Kantor Kecamatan</td>
            <td>Jakarta Barat</td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;

// pages/index.js (or pages/index.jsx)
*/

// pages/index.js

// pages/index.tsx

// pages/index.tsx

import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://efbdpjvnpulvomzjmpfz.supabase.co/functions/v1/rest-interview"
      );
      const jsonData = await response.json();
      setData(jsonData.locations);
      console.log(jsonData.location);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Find Location</h1>
      <p>Welcome to the home page!</p>
      <input
        type="text"
        placeholder="Enter location name"
        className="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table border={1} cellSpacing={0} cellPadding={14}>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Address</th>
            <th>Is Permanent</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) =>
              item.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.isPermanent ? "Yes" : "No"}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
