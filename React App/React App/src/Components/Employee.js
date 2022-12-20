import React from 'react'
import Button from "react-bootstrap/Button"

const Employee = (props) => {

    return <div style={{color: '#51087E', padding: '20px 30px'}}>

        <div className='pt-4'>
        <div className='card m-auto' style={{backgroundColor:'#880ED4', width: 520}}>
        <img src={props.data.photo}></img>
        <div className='card-body' style={{color:'white'}}>

        <h1>{props.data.name}</h1>
        <p>ID: {props.data.id} | Department: {props.data.department} | Role: {props.data.role}</p>
        <p>Start Date: {props.data.startDate}</p>

        </div>
        </div>

       <div className='button pt-2'>
        <Button style={{backgroundColor:'white', color:'black'}} onClick={props.resetState}>Back to List</Button></div>
        </div>
        
    </div>;

};

export default Employee; 