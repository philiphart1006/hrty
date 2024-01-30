// & Imports

import { useActionData, useLoaderData, useNavigate, useRouteLoaderData } from "react-router-dom";
import { updateEmployee } from "../utils/actions/auth";
import { useState } from "react";
import ImageUploadField from './ImageUpload'


// & Default function
export default function EditEmployee(){

  // * Constants
  const employeeTeamArray = useLoaderData()
  const employee = employeeTeamArray[0]
  const teams = employeeTeamArray[1]
  const softwares = employeeTeamArray[2]
  const hardwares = employeeTeamArray[3]
  console.log(employeeTeamArray)
  console.log('Hardwares: ',hardwares)
  const res = useActionData()
  const navigate = useNavigate()
  const employeeSoftwares = employee.softwares
  const employeeHardwares = employee.hardwares
  
  const manager = employee.manager

  const employeeSoftwareIds = []
  employeeSoftwares.map(employeeSoftware => {
    // console.log(employeeSoftware)
    employeeSoftwareIds.push(employeeSoftware.id)
  })
  const employeeHardwareIds = []
  employeeHardwares.map(employeeHardware => {
    console.log(employeeHardware)
    employeeHardwareIds.push(employeeHardware.id)
  })

  // console.log(manager)

  const managersArr = useRouteLoaderData("parent")
  // console.log('managersArr: ', managersArr)
  const managersNames = managersArr?.username
  // console.log('managersNames: ', managersNames)



  // * State
  const [ formData, setFormData ] = useState({
    first_name: employee.first_name,
    last_name: employee.last_name,
    status: employee.status,
    join_date: employee.join_date,
    manager: employee.manager?.id,
    team: employee.team?.id,
    softwares: employeeSoftwareIds,
    hardwares: employeeHardwareIds,
    image: employee.ImageUploadField
  })

  // * Reformat join date
  const joinDateArray = employee.join_date ? employee.join_date.split('') : []
  joinDateArray.length = 10
  const joinDateInput = joinDateArray.join('')

  // * Set state on handle change
  function handleChange(e){
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }


  function softwareChange(e){
    if(e.target.checked){
      formData.softwares.push(e.target.value)
    } else{
      const index = formData.softwares.indexOf(e.target.value)
      index > -1 && formData.softwares.splice(index, 1)
    } 
  }

  function hardwareChange(e){
    if(e.target.checked){
      formData.hardwares.push(e.target.value)
    } else{
      const index = formData.hardwares.indexOf(e.target.value)
      index > -1 && formData.hardwares.splice(index, 1)
    } 
  }

  // * Handle submission
  async function handleSubmit(e){
    console.log('Handle submit function reached')
    try {
      e.preventDefault()
      const response = await updateEmployee(formData, employee.id)
      console.log(response.data)
      res?.status == 200 && navigate(`/employees/${employee.id}`)
    } catch (error) {
      console.log(error)
    }
  }

  // & JSX
  return(
  <form onSubmit={handleSubmit} className="formContainer">
    <div className = 'formLHS'>
    <label form='first_name'>First name:</label>
    <input type='text' name='first_name' placeholder='first_name' onChange={handleChange} defaultValue={employee.first_name}/>

    <label form='last_name'>Last name:</label>
    <input type='text' name='last_name' onChange={handleChange} defaultValue={employee.last_name}/>

    <label form='status'>Status:</label>
    <input type='text' name='status' onChange={handleChange} defaultValue={employee.status}/>

    <label form='join_date'>Join Date:</label>
    <input type='date' name='join_date' onChange={handleChange} defaultValue={joinDateInput}/>
    
    <label form='team'>Team:</label>
    <select name='team' onChange={handleChange} defaultValue={employee?.team} placeholder={employee.team?.name}>
      <option value={employee.team}>{employee.team?.name}</option>
      {teams.map(team => {
      const {id, name} = team
      return(
        <option value={id} key={id}>{name}</option>
      )
    })
    }
    </select>
    
    <label form='manager'>Manager:</label>
    <select form='manager' onChange={handleChange}>
      <option value={employee.manager?.id}>{employee.manager?.username}</option>
    {managersArr.map(manager => {
      const {id, username} = manager
      return(
        <option value={id} key={id}>{username}</option>
      )
    })
    }
    </select>
    </div>

    <div className="formMid">
    <label form='softwares'>Softwares:</label>
    {softwares.map(software => {
      const {id, name} = software
      return(
        <div key={id}>
          <label>{name}</label>
          <input type="checkbox" id={id} name={id} value={id} defaultChecked={employeeSoftwareIds.includes(id)} onChange={softwareChange}></input>
        </div>
      )
    })
    }
    </div>

    <div className="formRHS">

    <label form='hardwares'>Hardwares:</label>
    {hardwares.map(hardware => {
      const {id, name, type} = hardware
      return(
        <div key={id}>
          <label>{name} - {type}</label>
          <input type="checkbox" id={id} name={id} value={id} defaultChecked={employeeHardwareIds.includes(id)} onChange={hardwareChange}></input>
        </div>
      )
    })
    }

    {/* Image upload here */}
    <div>
      <label form='imageUpload'>Image Upload: </label>
      <ImageUploadField setFormData={setFormData} formData={formData} onChange={handleChange} />
    </div>

    <button type='submit'>Save</button>
    {res && <p>{res.data.message}</p>}
    </div>
  </form>
  )
}

