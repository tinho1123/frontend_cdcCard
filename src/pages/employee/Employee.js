import React from 'react'
import { FilterEmployee, EmployeesTable } from '../../components'
import './styles.css'

function Employee() {
  return (
    <>
    <div>
        <FilterEmployee />
        <EmployeesTable />
    </div>
    <button className='createEmployee'>Novo Funcionário</button>
    </>
  )
}

export default Employee