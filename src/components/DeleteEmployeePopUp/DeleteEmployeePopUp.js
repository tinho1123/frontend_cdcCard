import React from 'react'
import './styles.css'

function DeleteEmployeePopUp({ trigger, setTrigger }) {
  return (trigger) ? (
    <div className='createEmployeePopUpContainer'>
      <div className='createEmployeePopUp__container'>
        <h4 style={{ textAlign: 'center' }}>Deseja excluir o funcionário abaixo?</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <label>Paulo Augusto</label>
          <label>CPF: 135.303.657-00</label>
          <div style={{ display: 'flex', gap: '2rem' }}>
          <button onClick={() => setTrigger(false)} style={{ padding: '0.5rem'}}>Cancelar</button>
          <button onClick={() => setTrigger(false)} style={{ padding: '0.5rem'}}>Excluir</button>
          </div>
        </div>
      </div>
    </div>
  ) : ''
}

export default DeleteEmployeePopUp;