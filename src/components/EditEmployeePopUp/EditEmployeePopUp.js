import React, { useState } from 'react'
import './styles.css'

function EditEmployeePopUp({ trigger, setTrigger }) {
  const [informationEmployee, setInformationEmployee] = useState({
    name: '',
    cpf: '',
    department: '',
    salary: '',
    birthDate: '',
  })
  
  const handleChange = ({ id, value }) => {
    setInformationEmployee({
      ...informationEmployee,
      [id]: value
    })
  }
  
    return (trigger) ? (
      <div className='createEmployeePopUpContainer'>
        <div className='createEmployeePopUp__container'>
          <h4 style={{ textAlign: 'center' }}>Novo funcionário</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className='labelInput'>
              <label>
                Nome
              </label>
              <input type='text' id='name' onChange={(e) => handleChange(e.target)}/>
            </div>
            <div className='labelInput' htmlFor='cpf'>
              <label>CPF</label>
              <input type='text' id='cpf' onChange={(e) => handleChange(e.target)} />
            </div>
            <div className='labelInput' htmlFor='department'>
              <label>Departamento</label>
              <select id='department' onChange={(e) => handleChange(e.target)}>
                <option>TI</option>
                <option>Administração</option>
              </select>
            </div>
            <div className='labelInput' htmlFor='salary'>
              <label>Salário</label>
              <input type='text' id='salary' onChange={(e) => handleChange(e.target)}/>
            </div>
            <div className='labelInput' htmlFor='birthDate'>
              <label>Data de Nascimento</label>
              <input type='text' id='birthDate' onChange={(e) => handleChange(e.target)}/>
            </div>
            <div style={{ display: 'flex', gap: '2rem' }}>
            <button onClick={() => setTrigger(false)} style={{ padding: '0.5rem'}}>Cancelar</button>
            <button onClick={() => setTrigger(false)} style={{ padding: '0.5rem'}}>Salvar</button>
            </div>
          </div>
        </div>
      </div>
    ) : ''
}

export default EditEmployeePopUp