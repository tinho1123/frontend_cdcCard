import { useState, useEffect } from 'react';
import Context from './Context';
import api from '../api/axiosConfig'

function ContextDataProvider({ children }) {
    const [employees, setEmployees] = useState([])
    const [departments, setDepartments] = useState([])

    const [filteredEmployee, setFilteredEmployee] = useState([])
    const [filteredEmployeeonFire, setFilteredEmployeeOnFire] = useState({
        name: '',
        department: ''
    })

    const [createEmployeePopUp, setCreateEmployeePopUp] = useState(false);
    const [editEmployeePopUp, setEditEmployeePopUp] = useState({
        active: false,
        idEmployee: '',
    });
    const [deleteEmployeePopUp, setDeleteEmployeePopUp] = useState({
        active: false,
        idEmployee: '',
    });


    useEffect(() => {
        if (filteredEmployeeonFire.name || filteredEmployeeonFire.department) {
            setFilteredEmployee(employees.filter(emplo => emplo.name.toLowerCase().includes(filteredEmployeeonFire.name) && emplo.Department.department.includes(filteredEmployeeonFire.department)))
        }
    }, [setFilteredEmployeeOnFire, employees, filteredEmployeeonFire])
    
    useEffect(() => {
        getData()
    }, [setEmployees, setFilteredEmployee, setDeleteEmployeePopUp, setEditEmployeePopUp, setCreateEmployeePopUp, setDepartments])

    const getData = async () => {
        await api.get('/employee')
        .then(({ data }) => {
            setEmployees(data)
            setFilteredEmployee(data)
            console.log(data)
        })
        .catch((err) => console.log(err))

        await api.get('/department')
        .then(({ data }) => setDepartments(data))
        .catch((err) => console.log(err))
    }

    const value = {
        createEmployeePopUp,
        setCreateEmployeePopUp,
        editEmployeePopUp,
        setEditEmployeePopUp,
        deleteEmployeePopUp,
        setDeleteEmployeePopUp,
        filteredEmployee,
        setFilteredEmployee,
        setFilteredEmployeeOnFire,
        employees,
        setEmployees,
        departments,
        setDepartments
    }

    return (
        <Context.Provider value={ value }>
            {children}
        </Context.Provider>
    )
}

export default ContextDataProvider;