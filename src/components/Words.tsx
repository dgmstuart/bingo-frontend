import React from 'react';
import Cell from './Cell'

const Words: React.FC<{ words: string[] }> = ({ words }) => {
  return(
    <table className="Words">
      <tbody>
        <Row words={words.slice(0,5)}/>
        <Row words={words.slice(5,10)}/>
        <Row words={words.slice(10,15)}/>
        <Row words={words.slice(15,20)}/>
        <Row words={words.slice(20,25)}/>
      </tbody>
    </table>
  )
}

const Row: React.FC<{ words: string[] }> = ({ words }) => {
  return(
    <tr className="Row">
      {
        words.map((word, index)=>
          <Cell key={index} word={word}/>
        )
      }
    </tr>
  )
}

export default Words;