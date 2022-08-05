import { useState, useEffect } from 'react';
import Context from './Context';
import api from '../api/axiosConfig'

function ContextDataProvider({ children }) {
    const [createEmployeePopUp, setCreateEmployeePopUp] = useState(false);
    const [editEmployeePopUp, setEditEmployeePopUp] = useState(false);
    const [deleteEmployeePopUp, setDeleteEmployeePopUp] = useState(false);

    const [employee, setEmployee] = useState()
    
    useEffect(() => {
        getData()
    }, [setEmployee])

    const getData = async () => {
        await api.get('/employee', )
        .then(({ data }) => setEmployee(data))
        .catch((err) => console.log(err))
    }

    console.log(employee);
    const value = {
        createEmployeePopUp,
        setCreateEmployeePopUp,
        editEmployeePopUp,
        setEditEmployeePopUp,
        deleteEmployeePopUp,
        setDeleteEmployeePopUp,
        employee,
        setEmployee
    }

    return (
        <Context.Provider value={ value }>
            {children}
        </Context.Provider>
    )
}

export default ContextDataProvider;