import React from 'react'
import './styles.css'

function EmployeesTable() {
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
          <td>Wellington Carvalho</td>
          <td>TI</td>
          <td>R$10.000</td>
          <td>10/09/1999</td>
          <td><button className='buttonWarning'>Editar</button> - <button className='buttonDanger'>Excluir</button></td>
        </tr>
        <tr>
          <td>Ana Clara da Silva lourenço</td>
          <td>Engenharia</td>
          <td>R$20.000</td>
          <td>16/05/2000</td>
          <td><button className='buttonWarning'>Editar</button> - <button className='buttonDanger'>Excluir</button></td>
        </tr>
      </table>
    </div>
  )
}

export default EmployeesTable