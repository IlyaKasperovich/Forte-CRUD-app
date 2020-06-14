import React from 'react';
import Button from './Button'

function Table({columns, data, tableDescriptor, onDelete}) {
    return (
        <table className="table table-dark">
            <thead>
            <tr>
                <th scope="col">{tableDescriptor}</th>
                {columns.map(columnTitle => (
                    <th key={columnTitle} scope="col">{columnTitle}</th>
                ))}
                <th></th>
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <tr key={item.id}>
                    <th scope="row">{++index}</th>
                    {columns.map(columnTitle => (
                        <td key={item[columnTitle]+columnTitle}>{item[columnTitle]}</td>
                    ))}
                    <th><Button
                        disabled={false}
                        onClick={(event)=>onDelete(event)}
                        classes={"btn btn-danger"}
                        label={"Delete"}
                        id={item.id}
                    /></th>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default Table;
