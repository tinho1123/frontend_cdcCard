import React, { useContext } from 'react'
import Context from '../../contexts/Context'
import './styles.css'

function EmployeesTable() {
  const {
    setEditEmployeePopUp,
    setDeleteEmployeePopUp,
    filteredEmployee,
  } = useContext(Context)
  return (
    <div>
      <table className='tableAlign'>
        <thead>
          <th>Nome</th>
          <th>Departamento</th>
          <th>Salário</th>
          <th>Data de Nascimento</th>
          <th></th>
        </thead>
        <tr>
          {filteredEmployee && filteredEmployee.map((employee) => {
            return (
              <>
                <td>{employee.name}</td>
                <td>{employee.Department.department}</td>
                <td>{employee.salary}</td>
                <td>{employee.birth_date}</td>
              <td>
            <button
              onClick={() => setEditEmployeePopUp({
                active: true,
                idEmployee: employee.id
              })}
              className='buttonWarning'>Editar
            </button> 
            <label> - </label> 
            <button
              onClick={() => setDeleteEmployeePopUp({
                active: true,
                idEmployee: employee.id
              })}
              className='buttonDanger'>Excluir
            </button>
          </td>
              </>
            )
          })}
          </tr>
 
      </table>
    </div>
  )
}

export default EmployeesTable