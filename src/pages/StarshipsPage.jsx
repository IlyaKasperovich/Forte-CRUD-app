import React, { useState } from 'react';
import Table from "../components/common/Table"
import Form from '../components/common/Form'

const data = [
  {owner: 'Mark', model: 'SID', id: '1'},
  {owner: 'Darth Vader', model: 'Super', id: '2'},
  {owner: 'Steve', model: 'Snowspeeder', id: '3'}
]

const columns = Object.keys(data[0]);

export default function StarshipsPage() {
  const [starships, setStarships] = useState(data);

  const handleAppStarship = (starshipData) => {
      const data = [...starships, starshipData];
      setStarships(data)
  }

  const getInitialData = () => {
      return columns.reduce((cols, columnName) => {
          cols[columnName] = "";
          return cols;
      }, {})
  }

  const handleDeleteStarship = (event) => {
    const id = event.currentTarget.id;
    const data = starships.filter(item => item.id !== id)
    setStarships(data)
  }

  return (
      <div className="container">
        <div className="h1">Starships</div>
          <Table
              data={starships}
              columns={columns}
              tableDescriptor="Starships"
              onDelete={handleDeleteStarship}
          />
          <Form
              initialData={getInitialData()}
              columns={columns}
              onAddData={handleAppStarship}
          />
      </div>
  );
}