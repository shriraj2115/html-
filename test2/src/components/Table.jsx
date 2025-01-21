import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import './Table.css'


const Table = () => {
  return (
    <div>
      <table className='one' >
        <TableHeader/>
        <TableBody/>
      </table>
    </div>
  )
}

export default Table
