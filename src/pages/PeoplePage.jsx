import React, { useState } from 'react';
import Table from "../components/common/Table"
import Form from '../components/common/Form'

const data = [
  {first: 'Mark', last: 'Otto', handle: '@motto', id: '1'},
  {first: 'Carl', last: 'Reno', handle: '@ceno', id: '2'},
  {first: 'Steve', last: 'Smith', handle: '@ssteve', id: '3'}
]

const columns = Object.keys(data[0]);

export default function PeoplePage() {
  const [people, setPeople] = useState(data);

  const handleAppPerson = (personData) => {
      const data = [...people, personData];
      setPeople(data)
  }

  const getInitialPeopleData = () => {
      return columns.reduce((cols, columnName) => {
          cols[columnName] = "";
          return cols;
      }, {})
  }

  return (
      <div className="container">
          <Table
              data={people}
              columns={columns}
              tableDescriptor="People"
          />
          <Form
              initialData={getInitialPeopleData()}
              columns={columns}
              onAddData={handleAppPerson}
          />
      </div>
  );
}