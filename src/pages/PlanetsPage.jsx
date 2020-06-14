import React, { useState } from 'react';
import Table from "../components/common/Table"
import Form from '../components/common/Form'

const data = [
  {name: 'Earth', galaxy: 'Milky Way', id: '1'},
  {name: 'Utapau', galaxy: 'Kessil', id: '2'},
  {name: 'Golm', galaxy: 'Bot', id: '3'}
]

const columns = Object.keys(data[0]);

export default function PlanetsPage() {
  const [planets, setPlanets] = useState(data);

  const handleAppPlanet = (planetData) => {
      const data = [...planets, planetData];
      setPlanets(data)
  }

  const getInitialData = () => {
      return columns.reduce((cols, columnName) => {
          cols[columnName] = "";
          return cols;
      }, {})
  }

  const handleDeletePlanet = (event) => {
    const id = event.currentTarget.id;
    const data = planets.filter(item => item.id !== id)
    setPlanets(data)
  }

  return (
      <div className="container">
        <div className="h1">Planets</div>
          <Table
              data={planets}
              columns={columns}
              tableDescriptor="Planets"
              onDelete={handleDeletePlanet}
          />
          <Form
              initialData={getInitialData()}
              columns={columns}
              onAddData={handleAppPlanet}
          />
      </div>
  );
}