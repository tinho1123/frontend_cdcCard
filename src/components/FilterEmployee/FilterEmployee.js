import React, { useState } from 'react'
import './styles.css';

function FilterEmployee() {
  const [filter, setFilter] = useState({
    name: '',
    department: ''
  })

  const handleChange = ({ id, value }) => {
    setFilter({
      ...filter,
       [id]: value
      })
  }

  return (
    <div className='filterEmployeeContainer'>
      <div className='filterEmployee__content'>
        <div style={{ display: 'flex', gap: '10rem' }}>
          <div className='labelInput'>
            <label htmlFor='name'>
              Nome:
            </label>
            <input type='text' id='name' onChange={ (e) => handleChange(e.target) }/>

          </div>
          <div>
            <label className='labelInput'>
              Departamento:
              <select id='department' onChange={ (e) => handleChange(e.target) }>
              <option>Administrativo</option>
              <option>TI</option>
              </select>
            </label>
          </div>
        </div>
        <button type='button' className='buttonFilter'>Pesquisa</button>
      </div>
    </div>
  )
}

export default FilterEmployee