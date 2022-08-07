import React, { useEffect, useState } from 'react'
import api from '../../api/axiosConfig';
import './styles.css'

function DeleteEmployeePopUp({ trigger, setTrigger }) {
  const [employee, setEmployee] = useState({});



  useEffect(() => {
    (async () => {
      if (!employee.name) {
        await api.get(`/employee/${trigger.idEmployee}`, )
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
            async () => await api.delete(`/employee/${employee.id}`)
              .then(() => { setTrigger({ active: false, idEmployee: '' })})
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