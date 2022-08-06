import React, { useContext, useState } from 'react'
import Context from '../../contexts/Context';
import './styles.css';

function FilterEmployee() {
  const { departments, setFilteredEmployeeOnFire } = useContext(Context);
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
        <div className='filterEmployee__content__labelInput'>
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
              {departments && departments.map((department) => {
                return (
                  <option key={department.id}>{department.department}</option>
                )
              })}
              </select>
            </label>
          </div>
        </div>
        <button
          type='button'
          className='buttonFilter'
          onClick={() => setFilteredEmployeeOnFire({
            name: filter.name.toLowerCase(),
            department: filter.department
          })}
        >
          Pesquisa
        </button>
      </div>
    </div>
  )
}

export default FilterEmployee