import React, { useContext, useState } from 'react'
import api from '../../api/axiosConfig';
import Context from '../../contexts/Context'
import './styles.css'

function CreateEmployeePopUp({ trigger, setTrigger }) {
  const { departments, setCreateEmployeePopUp } = useContext(Context);
const [informationEmployee, setInformationEmployee] = useState({
  name: '',
  cpf: '',
  department: '',
  salary: '',
  birthDate: '',
})

const handleChange = ({ id, value }) => { 
  if (id === 'cpf' || id === 'salary' || id === 'birthDate' ) {
    if (id === 'cpf' && value.length <= 14) {
      const v = value.replace(/\D/g, '');
      const formatCPF = v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
      setInformationEmployee({
        ...informationEmployee,
        [id]: formatCPF
      })
    } else if (id === 'salary') {
    const v = value.replace(/\D/g, '');
    // Dica pega no stack Overflow
    // https://stackoverflow.com/questions/5731193/how-to-format-numbers
    const salaryFormat = Intl.NumberFormat()
    const formatSalary = salaryFormat.format(v)
    setInformationEmployee({
      ...informationEmployee,
      [id]: formatSalary
    })
  } else if (id === 'birthDate' && value.length < 10) {
    const v = value.replace(/\D/g, '');
    const formatBirthDate = v.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
    setInformationEmployee({
      ...informationEmployee,
      [id]: formatBirthDate
    })
  } else {
    setInformationEmployee({
      ...informationEmployee,

    })
  }
  } 
  else {
  setInformationEmployee({
    ...informationEmployee,
    [id]: value
  })
}
}

const createEmployee = async () => {
  const getDepartment = informationEmployee.department ? departments.find((el) => el.department.includes(informationEmployee.department)) : departments[0]
  console.log(getDepartment);
  await api.post('/employee', {
    ...informationEmployee,
    department: getDepartment.id

  }).then(() => {
    setCreateEmployeePopUp(false)
  }).catch((err) => {
    console.log(err)
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
            <input type='text' id='name' onChange={(e) => handleChange(e.target)} value={informationEmployee.name}/>
          </div>
          <div className='labelInput' htmlFor='cpf'>
            <label>CPF</label>
            <input
              type='text'
              id='cpf'
              name='cpf'
              pattern="[+-]?\d+(?:[.,]\d+)?"
              title='asdas'
              onChange={(e) => handleChange(e.target)}
              value={informationEmployee.cpf}
            />
          </div>
          <div className='labelInput' htmlFor='department'>
            <label>Departamento</label>
            <select id='department' onChange={(e) => handleChange(e.target)} value={informationEmployee.department}>
              {departments && departments.map((department) => (
                <option key={department.id}>{department.department}</option>
              ))}
            </select>
          </div>
          <div className='labelInput' htmlFor='salary'>
            <label>Salário</label>
            <div>R$
            <input type='text' id='salary' onChange={(e) => handleChange(e.target)} value={informationEmployee.salary}/>
            </div>
          </div>
          <div className='labelInput' htmlFor='birthDate'>
            <label>Data de Nascimento</label>
            <input type='text' id='birthDate' onChange={(e) => handleChange(e.target)} value={informationEmployee.birthDate}/>
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
          <button onClick={() => setTrigger(false)} style={{ padding: '0.5rem'}}>Cancelar</button>
          <button onClick={() => createEmployee()} >Salvar</button>
          </div>
        </div>
      </div>
    </div>
  ) : ''
}

export default CreateEmployeePopUp