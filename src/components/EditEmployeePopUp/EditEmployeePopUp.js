import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Context from '../../contexts/Context'
import './styles.css'

function EditEmployeePopUp({ trigger, setTrigger }) {
  const { departments, setEmployees, employees, setFilteredEmployee } = useContext(Context)
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



  useEffect(() => {
    (async() => {
      if (!informationEmployee.name) {
        await axios.get(`${process.env.REACT_APP_HOSTNAME}/api/employee/${trigger.idEmployee}`, )
        .then(({data}) => setInformationEmployee({
          name: data.name,
          cpf: data.CPF?.cpf,
          department: data.Department?.department,
          salary: data.salary,
          birthDate: data.birth_date,
  
        }))
        .catch((err) => console.log(err))
      }
    }
    )()
  }, [informationEmployee.name, trigger.idEmployee])
  


  const updateEmployee = async () => {
    const getDepartment = departments.find((el) => el.department.includes(informationEmployee.department))
    await axios.put(`${process.env.REACT_APP_HOSTNAME}/api/employee/${trigger.idEmployee}`, {
      ...informationEmployee,
      department: getDepartment.id
  
    }).then(({ data }) => {
      setTrigger({ active: false, idEmployee: '' })
        const findEmployee = employees.findIndex((em) => em.id === trigger.idEmployee);
        setEmployees((prev) => {
          return { ...prev, [findEmployee]: data}
        })
        setFilteredEmployee(employees)


    }).catch((err) => {
      console.log(err)
    })
  }
    return (trigger.active) ? (
      <div className='createEmployeePopUpContainer'>
        <div className='createEmployeePopUp__container'>
          {informationEmployee.name ? (
            <>
 <h4 style={{ textAlign: 'center' }}>Editar funcionário</h4>
 <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
   <div className='labelInput'>
     <label>
       Nome
     </label>
     <input type='text' id='name' onChange={(e) => handleChange(e.target)} value={informationEmployee.name}/>
   </div>
   <div className='labelInput' htmlFor='cpf'>
     <label>CPF</label>
     <input type='text' id='cpf' onChange={(e) => handleChange(e.target)} value={informationEmployee.cpf}/>
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
     <input type='text' id='salary' onChange={(e) => handleChange(e.target)} value={informationEmployee.salary}/>
   </div>
   <div className='labelInput' htmlFor='birthDate'>
     <label>Data de Nascimento</label>
     <input type='text' id='birthDate' onChange={(e) => handleChange(e.target)} value={informationEmployee.birthDate}/>
   </div>
   <div style={{ display: 'flex', gap: '2rem' }}>
   <button onClick={() => setTrigger(false)} style={{ padding: '0.5rem'}}>Cancelar</button>
   <button onClick={() => updateEmployee()} style={{ padding: '0.5rem'}}>Salvar</button>
   </div>
 </div>
 </>
          ) : ''}
         
        </div>
      </div>
    ) : ''
}

export default EditEmployeePopUp