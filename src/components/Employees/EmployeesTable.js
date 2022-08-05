import React, { useContext } from 'react'
import Context from '../../contexts/Context'
import './styles.css'

function EmployeesTable() {
  const {
    setEditEmployeePopUp,
    setDeleteEmployeePopUp,
    employees,
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
          {employees && employees.map((employee) => {
            return (
              <>
                <td>{employee.name}</td>
                <td>{employee.Department.department}</td>
                <td>{employee.salary}</td>
                <td>{employee.birth_date}</td>
              </>
            )
          })}
          <td>
            <button
              onClick={() => setEditEmployeePopUp(true)}
              className='buttonWarning'>Editar
            </button> 
            <label> - </label> 
            <button
              onClick={() => setDeleteEmployeePopUp(true)}
              className='buttonDanger'>Excluir
            </button>
          </td>
        </tr>
        <tr>
          <td>Ana Clara da Silva lourenço</td>
          <td>Engenharia</td>
          <td>R$20.000</td>
          <td>16/05/2000</td>
          <td>
            <button
              onClick={() => setEditEmployeePopUp(true)}
              className='buttonWarning'>Editar
            </button> 
            <label> - </label> 
            <button
              onClick={() => setDeleteEmployeePopUp(true)}
              className='buttonDanger'>Excluir
            </button>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default EmployeesTable