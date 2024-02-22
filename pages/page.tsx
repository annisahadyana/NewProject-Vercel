import React, { useState } from "react";
import { GetStaticProps } from "next";
import { Location } from "./app/locationData";

interface HomePageProps {
  locationData: Location[];
}

const HomePage: React.FC<HomePageProps> = ({ locationData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = locationData.filter((location) =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        {/* Render table headers */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Permanent</th>
          </tr>
        </thead>
        <tbody>
          {/* Render table rows */}
          {filteredData.map((location) => (
            <tr key={location.id}>
              <td>{location.id}</td>
              <td>{location.name}</td>
              <td>{location.address}</td>
              <td>{location.permanent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  // Simulate fetching data from an API or database
  // Replace this with your actual data fetching logic
  const locationData: Location[] = [
    { id: 1, name: "Office", address: "Surabaya", permanent: "Yes" },
    { id: 2, name: "Rumah Adi", address: "Semarang", permanent: "Yes" },
    {
      id: 3,
      name: "Kantor Kelurahan",
      address: "Blora, Jawa Tengah",
      permanent: "No",
    },
    { id: 4, name: "Kantor DPRD", address: "Jakarta Timur", permanent: "Yes" },
    {
      id: 5,
      name: "Kantor Kecamatan",
      address: "Jakarta Barat",
      permanent: "Yes",
    },
  ];

  return {
    props: {
      locationData,
    },
  };
};

export default HomePage;
