import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Context from '../../contexts/Context';
import './styles.css'

function DeleteEmployeePopUp({ trigger, setTrigger }) {
  const [employee, setEmployee] = useState({});
  const { setEmployees , employees, setFilteredEmployee } = useContext(Context);



  useEffect(() => {
    (async () => {
      if (!employee.name) {
        await axios.get(`${process.env.REACT_APP_HOSTNAME}/api/employee/${trigger.idEmployee}`)
        .then(({data}) => setEmployee(data))
        .catch((err) => console.log(err))
      }
  
    })()
  }, [employee.name, trigger.idEmployee])



  return (trigger.active) ? (
    <div className='createEmployeePopUpContainer'>
      <div className='createEmployeePopUp__container'>
        {employee.name ? (
        <>
        <h4 style={{ textAlign: 'center' }}>Deseja excluir o funcionário abaixo?</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <label>{employee.name}</label>
          <label>CPF: {employee.CPF.cpf}</label>
          <div style={{ display: 'flex', gap: '2rem' }}>
          <button onClick={() => setTrigger({ active: false, idEmployee: '' })} style={{ padding: '0.5rem'}}>Cancelar</button>
          <button 
          onClick={
            async () => await axios.delete(`${process.env.REACT_APP_HOSTNAME}/api/employee/${employee.id}`)
              .then(() => { 
                setTrigger({ active: false, idEmployee: '' })
                setEmployees(employees.filter((em) => em.id !== employee.id));
                setFilteredEmployee(employees)
              })
              .catch((err) => console.log(err)) 
            } 
          style={{ padding: '0.5rem'}}>Excluir</button>
          </div>
        </div>
        </>
        ) : '' }
      </div>
    </div>
  ) : ''
}

export default DeleteEmployeePopUp;