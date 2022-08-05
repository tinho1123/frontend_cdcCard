import { useState, useEffect } from 'react';
import Context from './Context';
import api from '../api/axiosConfig'

function ContextDataProvider({ children }) {
    const [createEmployeePopUp, setCreateEmployeePopUp] = useState(false);
    const [editEmployeePopUp, setEditEmployeePopUp] = useState(false);
    const [deleteEmployeePopUp, setDeleteEmployeePopUp] = useState(false);

    const [employees, setEmployees] = useState()
    
    useEffect(() => {
        getData()
    }, [setEmployees])

    const getData = async () => {
        await api.get('/employee', )
        .then(({ data }) => setEmployees(data))
        .catch((err) => console.log(err))
    }

    console.log(employees);
    const value = {
        createEmployeePopUp,
        setCreateEmployeePopUp,
        editEmployeePopUp,
        setEditEmployeePopUp,
        deleteEmployeePopUp,
        setDeleteEmployeePopUp,
        employees,
        setEmployees
    }

    return (
        <Context.Provider value={ value }>
            {children}
        </Context.Provider>
    )
}

export default ContextDataProvider;