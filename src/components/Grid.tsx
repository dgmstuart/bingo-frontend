import React from 'react';
import './Grid.css'
import Cell from './Cell'
import { CellProps } from '../App'

const Grid: React.FC<{ cellPropsList: CellProps[] }> = ({ cellPropsList }) => {
  return(
    <table className="Grid">
      <tbody>
        <Row cellPropsList={cellPropsList.slice(0,5)}/>
        <Row cellPropsList={cellPropsList.slice(5,10)}/>
        <Row cellPropsList={cellPropsList.slice(10,15)}/>
        <Row cellPropsList={cellPropsList.slice(15,20)}/>
        <Row cellPropsList={cellPropsList.slice(20,25)}/>
      </tbody>
    </table>
  )
}

const Row: React.FC<{ cellPropsList: CellProps[] }> = ({ cellPropsList }) => {
  return(
    <tr className="Row">
      {
        cellPropsList.map(({ word, stamped, setStamped }, index)=>
          <Cell key={index} word={word} stamped={stamped} setStamped={setStamped}/>
        )
      }
    </tr>
  )
}

export default Grid;
