import React, { useContext } from 'react'
import { FilterEmployee, EmployeesTable, CreateEmployeePopUp, EditEmployeePopUp, DeleteEmployeePopUp } from '../../components'
import Context from '../../contexts/Context'
import './styles.css'

function Employee() {
  const {
    createEmployeePopUp,
    setCreateEmployeePopUp,
    editEmployeePopUp,
    setEditEmployeePopUp,
    deleteEmployeePopUp,
    setDeleteEmployeePopUp
  } = useContext(Context)

  return (
    <>
    <div>
        <FilterEmployee />
        <EmployeesTable />
  
    </div>
    <div>
        <CreateEmployeePopUp trigger={createEmployeePopUp} setTrigger={setCreateEmployeePopUp} />
        <EditEmployeePopUp trigger={editEmployeePopUp} setTrigger={setEditEmployeePopUp} />
        <DeleteEmployeePopUp trigger={deleteEmployeePopUp} setTrigger={setDeleteEmployeePopUp} />
    </div>
    <button className='createEmployee' onClick={() => setCreateEmployeePopUp(true)}>Novo Funcionário</button>
    </>
  )
}

export default Employee