import React from 'react'
import TableRow from "./TableRow"

function Goods({ data }) {
  return (
    <table className="striped z-depth-5">
      <thead>
      <tr>
        <th>Id</th>
        <th>Название товара</th>
        <th>Цена</th>
        <th>Количество</th>
        <th>Сумма</th>
      </tr>
      </thead>
      <tbody>
      { data.map(item => <TableRow key={item.gid} id={item.gid} price={item.gprice} title={item.gname} />) }
      </tbody>
    </table>
  )
}

export default Goods
