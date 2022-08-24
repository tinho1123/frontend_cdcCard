import { useState, useEffect } from 'react';
import Context from './Context';
import axios from 'axios';

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
        await axios.get(`${process.env.REACT_APP_API}/api/employee`)
        .then(({ data }) => {
            console.log(data);
            setEmployees(data)
            setFilteredEmployee(data)
        })
        .catch((err) => console.log(err))
        await axios.get(`${process.env.REACT_APP_API}/api/department`)
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