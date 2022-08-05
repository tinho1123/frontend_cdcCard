import { useState } from 'react';
import Context from './Context';

function ContextDataProvider({ children }) {
    const [createEmployeePopUp, setCreateEmployeePopUp] = useState(false);
    const [editEmployeePopUp, setEditEmployeePopUp] = useState(false);
    const [deleteEmployeePopUp, setDeleteEmployeePopUp] = useState(false);

    const value = {
        createEmployeePopUp,
        setCreateEmployeePopUp,
        editEmployeePopUp,
        setEditEmployeePopUp,
        deleteEmployeePopUp,
        setDeleteEmployeePopUp,
    }

    return (
        <Context.Provider value={ value }>
            {children}
        </Context.Provider>
    )
}

export default ContextDataProvider;