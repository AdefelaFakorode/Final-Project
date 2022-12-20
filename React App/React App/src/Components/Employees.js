import React from 'react'
import './Employees.css'

const Employees = (props) => {

    const updateEmployee = (employeeId) => {
        
        props.setSelectedEmployee(employeeId);
    }

    return <div style={{padding:'20px 10px'}} >{
        
        props.data.map(employee => {

            return <p className='pt-5' onClick = {() => { updateEmployee(employee.id) }} style = {{cursor:'pointer'}} role = "button">
            ID: {employee.id} | Name: {employee.name} | Department: {employee.department}
            </p>

        })

     } </div>;

}

export default Employees;